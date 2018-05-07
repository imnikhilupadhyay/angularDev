const { Router } = require('express');
const userRouter = Router();

userRouter.post('/register', function(req, res) {
    res.send(req.body);
});

module.exports = userRouter;