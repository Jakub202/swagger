'use strict';

var utils = require('../utils/writer.js');
var FoodWasteController = require('../service/FoodWasteControllerService');

module.exports.addWaste = function addWaste (req, res, next, homeId, date, ingredientName, amount) {
  FoodWasteController.addWaste(homeId, date, ingredientName, amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addWasteList = function addWasteList (req, res, next, body, homeId, date) {
  FoodWasteController.addWasteList(body, homeId, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoryWasteStatsByHomeId = function getCategoryWasteStatsByHomeId (req, res, next, homeId, startDate, endDate) {
  FoodWasteController.getCategoryWasteStatsByHomeId(homeId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatsByDateRange = function getStatsByDateRange (req, res, next, homeId, startDate, endDate) {
  FoodWasteController.getStatsByDateRange(homeId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWasteByDate = function getWasteByDate (req, res, next, homeId, date) {
  FoodWasteController.getWasteByDate(homeId, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWasteByDateRange = function getWasteByDateRange (req, res, next, homeId, startDate, endDate) {
  FoodWasteController.getWasteByDateRange(homeId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
