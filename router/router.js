const express = require('express');
const router = express.Router();

const { login, confirm, update } = require('../controller/logics');

router.route('/login').post(login);
router.route('/confirm').post(confirm);
router.route('/update').patch(update);

module.exports = router;