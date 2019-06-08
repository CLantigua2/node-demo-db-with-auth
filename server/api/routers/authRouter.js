const { login, register } = require('../helpers/');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

router.post('/register', (req, res) => {
    const creds = req.body;
    register(creds)
        .then((ids) => {
            res.status(201).json(ids);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

router.post('/login', (req, res) => {
    const creds = req.body;
    login(creds)
        .then((user) => {
            if (user && bcrypt.compareSync(creds.password, user.password)) {
                req.session.userId = user.id;
                res.status(200).json({ message: 'welcome' });
            } else {
                res.status(401).json({ message: 'invalid credentials' });
            }
        })
        .catch((err) => res.status(500).json({ err }))
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.send({ message: 'you can never leave', err })
            } else {
                res.send('you have logged out')
            }
        })
    }
})

module.exports = router