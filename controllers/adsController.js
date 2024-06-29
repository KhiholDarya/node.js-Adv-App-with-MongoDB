const Ad = require('../models/ad');
const { query } = require('express');

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchAds = async (req, res) => {
	try {
		 let query = {};

		 // Przykład: Wyszukiwanie po tytule
		 if (req.query.title) {
			  query.title = { $regex: new RegExp(req.query.title, 'i') };
		 }

		 // Przykład: Wyszukiwanie po kategorii
		 if (req.query.category) {
			  query.category = req.query.category;
		 }

		 // Przykład: Wyszukiwanie po tagach
		 if (req.query.tags) {
			  query.tags = { $in: req.query.tags.split(',') };
		 }

		 // Przykład: Wyszukiwanie po cenie w określonym zakresie
		 if (req.query.minPrice && req.query.maxPrice) {
			  query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
		 } else if (req.query.minPrice) {
			  query.price = { $gte: req.query.minPrice };
		 } else if (req.query.maxPrice) {
			  query.price = { $lte: req.query.maxPrice };
		 }

		 // Przykład: Wyszukiwanie po dacie dodania w określonym zakresie
		 if (req.query.fromDate && req.query.toDate) {
			  query.dateAdded = { $gte: new Date(req.query.fromDate), $lte: new Date(req.query.toDate) };
		 } else if (req.query.fromDate) {
			  query.dateAdded = { $gte: new Date(req.query.fromDate) };
		 } else if (req.query.toDate) {
			  query.dateAdded = { $lte: new Date(req.query.toDate) };
		 }

		 const ads = await Ad.find(query);
		 res.json(ads);
	} catch (err) {
		 res.status(500).send(err.message);
	}
};

exports.createAd = async (req, res) => {
  try {
    const ad = new Ad(req.body);
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).send('Ad not found');
    res.format({
      'application/json': () => res.json(ad),
      'text/html': () => res.send(`<h1>${ad.title}</h1><p>${ad.description}</p>`),
      'text/plain': () => res.send(`${ad.title}: ${ad.description}`)
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).send('Ad not found');
    if (ad.author !== req.user.name) return res.status(403).send('Access denied');

// Update the ad with the new data
    Object.assign(ad, req.body);
    await ad.save();

    res.json(ad); // Return the updated ad as JSON
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).send('Ad not found');
    if (ad.author !== req.user.name) return res.status(403).send('Access denied');

    await ad.remove();
    res.send('Ad deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
