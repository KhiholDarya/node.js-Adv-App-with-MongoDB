const Ad = require('../models/ad');

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find();
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