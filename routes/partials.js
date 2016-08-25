/**
 * Created by D on 21.6.2016 г..
 */
var express = require('express');
var router = express.Router();

router.get('/partials/*', function (req, res) {
    res.render(req.params[0]);
});

module.exports = router;