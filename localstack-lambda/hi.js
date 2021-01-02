module.exports.hi = (event, context, callback) => {
    callback(null, { message: 'Hello from SNS!', event });
  };