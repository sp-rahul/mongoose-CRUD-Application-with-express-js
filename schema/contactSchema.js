const mongoose = require('mongoose')

const contactSchema= mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	status : {
		type: String,
		enum: ["active", "inactive"]
		
	},
	date :{
		type: Date,
		default:Date.now,
	}
});

module.exports = contactSchema;
