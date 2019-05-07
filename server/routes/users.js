var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var response = {
       "user":req.body.user,
       "password":req.body.userPd
   };
   console.log(req.query,req.params,req.body);
   res.end(JSON.stringify(response));
});

module.exports = router;
