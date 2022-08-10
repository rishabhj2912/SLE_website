const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ConnectorSchema = new Schema({
	patient_id: {
		type: String,
		required: true
	},
	study_id: {
		type: String,
		required: true
	},
    current_status: {
        type:[String],
        required: false
    },
    results: {
        type:[String],
        required: false
    },
	date:{
		type: Date,
		required: false
	}
});

module.exports = Connector = mongoose.model("Connector", ConnectorSchema);
