'use strict';


/**
 * Get stats for bought items by date range
 *
 * homeId Long 
 * startDate date 
 * endDate date 
 * returns Object
 **/
exports.getBoughtItemsStatsByDateRange = function(homeId,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

