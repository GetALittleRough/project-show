var express = require('express');
var router = express.Router();
const si = require('systeminformation')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/loadData', function(req, res, next) {
  si.currentLoad()
    .then(data => {
      res.send({
        code: 200,
        value: data.currentload
      })
    })
    .catch(err => {
      res.send({
        code: 500,
        value: 'Internal server error.'
      })
    })
});

module.exports = router;
