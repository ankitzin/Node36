
const express = require('express');

const shopController = require('../controllers/admin')
const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;
