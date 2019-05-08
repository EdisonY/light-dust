var express = require('express');
var router = express.Router();
require('../db')


/* GET users listing. */
router.post('/', function(req, res, next) {
    var response = {
       "user":req.body.id,
       "password":req.body.pd
   };
   console.log(req.query,req.params,req.body);

   console.log(mongoose);

   res.end(JSON.stringify(response));
});

module.exports = router;
