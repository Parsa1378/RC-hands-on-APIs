const express = require('express');
const router = express.Router();

const { login, confirm } = require('../controller/logics');

router.route('/login').post(login);
router.route('/confirm').post(confirm);