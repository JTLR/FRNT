// Runs a local web server to host files
import express from 'express';
import request  from 'request';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.debug.config';

import { GOOGLE_API_KEY, DIRECTIONS_URL } from '../src/app/config';

const app = express();
const GoogleMapsClient = require('@google/maps').createClient({ key: GOOGLE_API_KEY });


app.use('/', express.static(path.join(__dirname, '../build/views')));
app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/directions', (req, res) => {

	let query = Object.assign({}, req.query);

	query.mode = 'driving';
	query.traffic_model = 'pessimistic';

	// console.log(query);

	const directions = GoogleMapsClient.directions(query, (error, response) => {
		if(!error) {
			res.send(response.json);
		} else {
			console.log(error);
			res.send(500);
		}
	});
});

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
