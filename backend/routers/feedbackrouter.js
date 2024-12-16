const express = require('express');
const router = express.Router();
const Model = require('../models/feedbackModel');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, (req, res) => {
    req.body.name = req.user.name;
    req.body.email = req.user.email;
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            if (err.code === 11000) {
                res.status(500).json({ message: 'Email Already Exists' });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
});

// getall
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;