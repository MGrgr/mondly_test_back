var express = require('express');
const adminController = require('../controllers/admin.controller');
var router = express.Router();

router.put('/', adminController.update);

router.get('/content', adminController.get);

module.exports = router;
