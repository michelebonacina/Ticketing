const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

router.get('', ticketController.ticketList);

module.exports = router;