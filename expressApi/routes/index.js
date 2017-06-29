var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hand-checker', (req,res, next)=>{
    console.log(req.body.hand);
    res.json({
        msg: "You hit the express API"
    })
})

module.exports = router;
