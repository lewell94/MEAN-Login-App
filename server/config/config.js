var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
	development: {
		db: 'mongodb://localhost/mean',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://admin:admin@ds063769.mongolab.com:63769/mean_login_app',
		port: process.env.PORT || 8000
	}
}