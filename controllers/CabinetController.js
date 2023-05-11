'use strict';

var utils = require('../utils/writer.js');
var CabinetController = require('../service/CabinetControllerService');

module.exports.addItemToCabinet = function addItemToCabinet (req, res, next, homeId, itemName, amount) {
  CabinetController.addItemToCabinet(homeId, itemName, amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCabinetItem = function deleteCabinetItem (req, res, next, homeId, itemId) {
  CabinetController.deleteCabinetItem(homeId, itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCabinetItems = function getAllCabinetItems (req, res, next, homeId) {
  CabinetController.getAllCabinetItems(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeAllCabinetItems = function removeAllCabinetItems (req, res, next, homeId) {
  CabinetController.removeAllCabinetItems(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAmount_1 = function updateAmount_1 (req, res, next, itemId, amount) {
  CabinetController.updateAmount_1(itemId, amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
