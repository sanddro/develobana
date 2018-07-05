import { Router } from 'express';
import User from '../models/User';
import validateRegister from '../validators/register';

const router = Router();

router.post('/register', async (req, res) => {
    let { isValid, errors } = validateRegister(req.body);
    if(!isValid){
        return res.status(404).send(errors);
    }
    const exists = await User.findOne({mail: req.body.mail});
    if(exists){
        errors.mail = `User with mail ${req.body.mail} already exists`;
        return res.status(404).send(errors);
    }
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        mail: req.body.mail,
    });
    let user = await newUser.save();
    res.send(user);
});

export default router;
