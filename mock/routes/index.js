var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/indexlist', function(req, res, next) {
    console.log(__dirname);
    fs.readFile('json/index.json', function(err, data) {
        if (err) {
            res.send({
                "isSuccessful": false,
                "statusCode": 500
            })
        }
        res.json(JSON.parse(data));
    })
})
module.exports = router;