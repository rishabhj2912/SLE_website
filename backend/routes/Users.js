var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");


// Load models
const Study = require("../models/Study");
const Patient = require("../models/Patient");

var Fetchuser = require("../middleware/Fetchuser");


// GET request 
// Getting all the Studies
router.get("/", function(req, res) {
    Study.find(function(err, Studies) {
		if (err) {
			console.log(err);
		} else {
			res.json(Studies);
		}
	})
});

// Getting all the Patients
router.get("/", function(req, res) {
    Patient.find(function(err, Patients) {
		if (err) {
			console.log(err);
		} else {
			res.json(Patients);
		}
	})
});
// POST request 
// API endpoint for registration
router.post("/register", async (req, res) => {

    try {

        const username = req.body.username;

        let patient = await Patient.findOne({ username });
        let study = await Study.findOne({ username });

        if (patient || study) {
            return res.send("Username already taken!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(req.body.password, salt);

        if (req.body.type === "patient") {

            newPatient = await Patient.create({
                type: req.body.type,
                username: req.body.username,
                password: hashed_password,
                Patient_id: req.body.Patient_id
            });
        }

        if (req.body.type === "study") {

            newStudy = await Study.create({
                type: req.body.type,
                name: req.body.name,
                username: req.body.username,
                password: hashed_password,
                Study_id: req.body.Study_id,
            });
        }

        return res.send("Registration Successful!");

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occurred!");
    }
});

// API endpoint for login
router.post("/login", async (req, res) => {

    try {

        const username = await req.body.username;
        const password = await req.body.password;

        let patient = await Patient.findOne({ username });
        let study = await Study.findOne({ username });

        if (!patient && !study) {
            return res.status(400).json({ error: "Please enter valid credentials!" });
        }

        if (patient) {
            const compare_password = await bcrypt.compare(password, patient.password);
            if (!compare_password) {
                return res.status(400).json({ error: "Please enter valid credentials!" });
            }
            const data = {
                user_id: patient._id,
                type: patient.type
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET);
            res.json({ authToken });
        }
        if (study) {
            console.log(study)
            const compare_password = await bcrypt.compare(password, study.password);
            if (!compare_password) {
                return res.status(400).json({ error: "Please enter valid credentials!" });
            }
            const data = {
                user_id: study._id,
                type: study.type
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET);
            res.json({ authToken });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occurred!");
    }
});



module.exports = router;

