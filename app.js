import { getCreds } from './config';
const Twitter = require('twitter');
const bunyan = require('bunyan');

const client = new Twitter(getCreds());

const trackPhrase = 'i wish there was an app,i wish there was software, i wish there';
const stream = client.stream('statuses/filter', { track: trackPhrase });
const log = bunyan.createLogger({
  name: 'twitter-stream',
  streams: [{
  type: 'rotating-file',
  path: './results.log',
  }]
});

stream.on('data', (event) => {
  log.info(event.text);
});

stream.on('error', (event) => {
  log.error(event);
});
