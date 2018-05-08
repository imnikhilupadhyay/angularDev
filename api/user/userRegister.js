const express = require('express');
const userRouter = express.Router();

userRouter.post('/register', function(req, res) {
    res.send(req.body);
});

module.exports = userRouter;