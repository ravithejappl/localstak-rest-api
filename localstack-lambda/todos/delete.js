'use strict';
const dynamoDb = require('./dynamodb');

module.exports.delete = (event, context, callback) => {
  const params = {
    TableName: 'localstack-lambda-local',
    Key: {
      id: event.pathParameters.id,
    },
  };

  // delete the todo from the database
  dynamoDb.delete(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t remove the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({}),
    //  result: JSON.stringify({}),
    };
    callback(null, {result:response});
  });
};
