const express = require('express');
const router = express.Router();

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
  filterByLocation,
  filterByContract,
} = require('../controllers/devjobs.controller');

router.get('/', getDevjobs);
router.get('/search', filterDevjobs);
router.get('/search/location', filterByLocation);
router.get('/search/contract', filterByContract);
router.get('/:id', getSinglejob);

module.exports = router;
