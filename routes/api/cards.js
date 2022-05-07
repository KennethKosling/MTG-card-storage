const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');
const checkLoggedIn = require('../../config/checkLoggedIn');

router.post('/', checkLoggedIn, cardsCtrl.create);

router.get('/:id', checkLoggedIn, cardsCtrl.getCards);

module.exports = router;