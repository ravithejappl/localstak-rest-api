'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (true) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:4566~',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
