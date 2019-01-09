const router = require('express').Router();
const {signUp} = require('../../controllers/auth')
const {requireSignIn} = require('../setup')

router.post('/sign-up', signUp);

router.post('/sign-in', requireSignIn, (req, res) => {
    res.send({
        success: true,
        message: 'This is for sign-in',
        user: req.user
    })
})

module.exports = router;