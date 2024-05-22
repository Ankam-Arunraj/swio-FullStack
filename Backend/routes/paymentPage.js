const express = require('express');
const { submitPayment, viewTransactions } = require('../controllers/paymentControllers');

const router = express.Router();

router.post('/submit',submitPayment );
router.get('/view',viewTransactions );

module.exports = router;