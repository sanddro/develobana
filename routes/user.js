import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/register', async (req, res) => {
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
