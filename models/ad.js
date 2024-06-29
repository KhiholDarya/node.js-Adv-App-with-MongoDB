const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	author: { type: String, required: true },
	category: { type: String, required: true },
	tags: { type: [String], required: true },
	price: { type: Number, required: true },
	location: { type: String, required: true },
	dateAdded: { type: Date, default: Date.now },
	contact: {
	  phone: { type: String, required: true },
	  email: { type: String, required: true }
	},
	condition: { type: String, required: true }
}, { collection: 'advertisements' });

// Utworzenie indeksu na pole 'title'
adSchema.index({ title: 'text' });

module.exports = mongoose.model('Ad', adSchema);
