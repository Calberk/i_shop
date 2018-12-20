const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send({
        success: true,
        message: 'Yes, we got ourselves an API'
    });
});

module.exports = router; 