const express = require('express');
const router = express.Router();
const adsController = require('../controllers/adsController');
const auth = require('../middleware/auth');

router.post('/', adsController.createAd);
router.get('/', adsController.getAllAds);
router.get('/search', adsController.searchAds);
router.get('/:id', adsController.getAdById);
router.put('/:id', auth, adsController.updateAd);
router.delete('/:id', auth, adsController.deleteAd);

module.exports = router;
