var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('vidzy:videos@ds243055.mlab.com:43055/vidzy');

router.get('/', function(req, res) {
    var collection = db.get('videos');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

module.exports = router;
