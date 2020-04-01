const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('../routes/admin')

router.get('/', (req, res, next) => {
  const products = adminData.adminData
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',{prods:products,docTitle:'My Shop',path:'/shop'})
});

module.exports = router;
