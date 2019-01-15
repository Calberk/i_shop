const router = require('express').Router();
const {signIn, signUp} = require('../../controllers/auth')
const {requireBasicAuth, requireSignIn} = require('../setup')

router.post('/sign-up', signUp);

router.post('/sign-in', requireSignIn, signIn);

router.get('/jwt-sign-in', requireBasicAuth, )

module.exports = router;