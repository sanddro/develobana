import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import validateRegister from '../validators/register';
import validateLogin from '../validators/login';
import keys from '../config/keys';

const router = Router();

router.post('/register', async (req, res) => {
    let { isValid, errors } = validateRegister(req.body);
    if(!isValid){
        return res.status(404).json(errors);
    }
    const exists = await User.findOne({mail: req.body.mail});
    if(exists){
        errors.mail = `User with mail ${req.body.mail} already exists`;
        return res.status(404).json(errors);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        mail: req.body.mail,
    });
    let user = await newUser.save();
    res.json(user);
});

router.post('/login', async (req, res) => {
    const { errors, isValid } = validateLogin(req.body);

    if (!isValid) {
      res.status(400).send(errors);
    }
  
    const mail = req.body.mail;
    const password = req.body.password;
  
    var user = await User.findOne({ mail });
  
    if (!user) {
      errors.mail = 'User with this email not found';
      return res.status(404).send(errors);
    }
  
    if (bcrypt.compareSync(password, user.password)) {
      const payload = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname
      };
      const token = jwt.sign(payload, keys.jwtKey, { expiresIn: 3600 });
      res.send({ success: true, token: 'Bearer ' + token });
    } else {
      errors.password = 'Password incorrect';
      return res.status(400).send(errors);
    }

});

export default router;
