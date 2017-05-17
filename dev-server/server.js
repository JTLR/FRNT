// Runs a local web server to host files
import express from 'express';
import request  from 'request';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.debug.config';

const app = express();

app.use('/', express.static(path.join(__dirname, '../build/views')));
app.use('/', express.static(path.join(__dirname, '../build')));

function buildUrl(url, query) {
	let index = 0;

	for(let key in query) {
		if(index == 0) {
			url += '?';
		} else {
			url += '&'
		}

		url += `${key}=${query[key]}`;

		index++;
	}

	return url;
}

const compiler = webpack(config);

// Start the server
const server = app.listen(3000, function () {
	const host = 'localhost';
	const port = server.address().port;
	console.log('Running a local server at http://%s:%s', host, port);
});
