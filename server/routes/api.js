var express = require('express');
var router = express.Router();


/*  static data used in testing  */
/*  TODO: remove this shit       */



const data =[
    {"id": 1, "body": "print('Hello World!')"},
    {"id": 2, "body": "print(f'Meaning of life: {value}')"},
    {"id": 3, "body": "plain text"}
];


router.get('/post', function(req, res, next) {
    console.log(data);
    res.json(data);
});


router.get('/post/:id', function(req, res, next) {
    res.json(data.find(data => data.id == req.params.id));
});

module.exports = router;