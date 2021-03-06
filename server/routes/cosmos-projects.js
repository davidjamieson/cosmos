var database = require("../includes/database.js"),
	cosmosHelper = require('../includes/cosmos-helper.js');

exports.method = "get";
exports.route = "/cosmos-api/projects";

exports.handler = function(req, res) {

	if ( ! req.user) {
		return res.send({
			'success': true,
			'projects': [],
		});
	}

	var db = database.getDb();
	var sql = "SELECT id, name, slug, created_at, modified_at, created_by, config FROM cosmos";

	db.all(sql, function(err, rows) {

		var projects = rows.map(function(row) {
			return cosmosHelper.transformProject(row);
		});

		res.send({
			'success': true,
			'projects': projects,
		});
	});

};
