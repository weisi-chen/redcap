'use strict';

module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'record',
      'field',
      'event',
    ],
    optional: [
      'repeat_instance'
    ]
  };

  return function (params, callback) {
    var keys = utils.keyCheck (params, keySet);

    if (keys.valid === false) 
      return callback (new Error (keys.errmsg));

    var body = Object.assign ({
      content: 'file',
      format: 'json',
      action: 'export',
      repeat_instance: 1
    }, keys.keys);

    utils.post (body, callback);
  }
};
