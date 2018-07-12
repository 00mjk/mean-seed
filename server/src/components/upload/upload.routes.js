const express = require('express');
const router = express.Router();
let multer = require('multer');
let passport = require('passport');
let jwt = require('jsonwebtoken');


// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });

let upload = multer({dest: './uploads'});

router.post('/', requireAuth, upload.single('files'), async (req, res) => {
	try {
		// will process the file
		console.log(req.file);

		let response = {fileName: req.file.filename, originalName: req.file.originalname};
		res.send(response);
	} catch (err) {
		res.sendStatus(400);
	}
});
