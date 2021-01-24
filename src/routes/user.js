const express = require('express');

const router = express.Router();
const { getUser } = require('../controllers/user');
const { isAuthenticated } = require('../middleware/auth');

router.get('/', isAuthenticated, getUser);

module.exports = router;
