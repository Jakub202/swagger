'use strict';

var utils = require('../utils/writer.js');
var BoughtItemController = require('../service/BoughtItemControllerService');

module.exports.getBoughtItemsStatsByDateRange = function getBoughtItemsStatsByDateRange (req, res, next, homeId, startDate, endDate) {
  BoughtItemController.getBoughtItemsStatsByDateRange(homeId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
