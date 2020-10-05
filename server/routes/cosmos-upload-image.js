var path = require("path"),
	fs = require("fs"),
	formidable = require('formidable'),
	Jimp = require('jimp');

exports.method = "post";
exports.route = "/cosmos-api/upload-image/:projectId";

exports.handler = function(req, res) {

	const projectId = '' + req.params.projectId;

	// Check dirs

	const baseDir = fs.realpathSync(path.join(process.cwd(), 'data', 'uploads'));
	const projectUploadDir = path.join(baseDir, projectId);
	const projectThumbDir = path.join(baseDir, projectId, 'thumb');

	try {
		fs.mkdirSync(projectUploadDir, (err) => {});
		fs.mkdirSync(projectThumbDir, (err) => {});
	} catch (e) {
		// OK if exists
	}

	/*
	const projectStats = fs.statSync(projectUploadDir);
	if ( ! projectStats.isDirectory()) {
	}

	const thumbStats = fs.statSync(projectThumbDir);
	if ( ! thumbStats.isDirectory()) {
	}*/

	var form = new formidable.IncomingForm();
	form.uploadDir = fs.realpathSync(path.join(process.cwd(), 'data'));
	form.keepExtensions = true;
	form.parse(req);

	var file = null;

	form.on('file', function(name, uploadedFile) {
		file = uploadedFile;
	});

	form.on('end', function() {

		console.log("Form upload finished.");

		var newFilename = Date.now() + '-' + file.name.toLowerCase();
		newFilename = newFilename.replace(/[^a-zA-Z0-9\.]/g, '_');

		var newFilepath = path.join(projectUploadDir, newFilename);
		var newThumbpath = path.join(projectThumbDir, newFilename);

		Jimp.read(file.path)
			.then(function(img) {
				console.log(img.getMIME());
				console.log(img.getExtension());
				console.log("Creating 400px thumbnail.");
				return img.cover(400, 400).write(newThumbpath);
			})
			.then(function(img) {
				return new Promise(function(resolve, reject) {
					fs.rename(file.path, newFilepath, function(err) {
						if (err) {
							console.log('Move error');
							console.log(err);
							reject(err);
						}
						console.log('Moved!');
						resolve();
					});
				});
			})
			.then(function(img) {
				console.log("Completed image upload.");
				return res.send({
					'success': true,
					'filename': newFilename,
				});
			})
			.catch(function(err) {
				console.log('Caught error');
				console.log(err);
				var err = err.toString();
				if (err.match(/Unsupported MIME type/)) {
					err = "Unsupported file type";
				}
				return res.send({
					'success': false,
					'reason': err,
				});
			});

	});

};
