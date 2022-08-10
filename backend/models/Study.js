const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudySchema = new Schema({
	study_id:{
		type:String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	username:{
        type: String,
        required:true
    },
	password: {
		type: String,
		required: true
	},
	tests:{
		type:[String],
		required: false
	},
	surveys:{
		type:[String],
		required: false
	},
	languages:{
		type:String,
		required: false
	},
	date:{
		type: Date,
		required: false
	}
});

module.exports = Study = mongoose.model("Studies", StudySchema);
