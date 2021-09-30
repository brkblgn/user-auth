const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, password2 } = req.body;

        if (!(email && password && password2)) {
            res.status(400).send('Fill required inputs.');
        }

        if (password !== password2) {
            res.status(400).send('Passwords do not match.');
        }
        const oldUser = await User.findOne({ email });
        
        if (oldUser) {
            res.status(409).send('Mail adress already registered.');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: encryptedPassword
        });

        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            { expiresIn: '1h'}
        );

        user.token = token;

        res.status(201).send(user);

    } catch (error) {
        console.log('Error on Register => ', error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!( email && password )) {
            res.status(400).send('Fill all required inputs.')
        }

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).send('Mail adress not registered.');
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = await jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                { expiresIn: '1h'}
            );

            user.token = token

            res.status(200).json(user);
        } else {
            res.status(400).send('Wrong password.');

        }
    } catch (error) {
        console.log('Error on Login => ', error);
    }

});

module.exports = router;
