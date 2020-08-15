// dependencies
const express = require('express');
const router = express.Router();

// controllers
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/', appController.root)
router.post('/product', appController.product)
router.post('/contact', appController.login, userController.contact)
router.post('/dashboard', appController.login, adminController.admin)

// export router
module.exports = router;
