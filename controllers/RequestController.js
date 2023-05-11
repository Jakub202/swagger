'use strict';

var utils = require('../utils/writer.js');
var RequestController = require('../service/RequestControllerService');

module.exports.getAllRequests = function getAllRequests (req, res, next, homeId) {
  RequestController.getAllRequests(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPendingRequests = function getPendingRequests (req, res, next, homeId) {
  RequestController.getPendingRequests(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPendingRequestsForType = function getPendingRequestsForType (req, res, next, homeId, type) {
  RequestController.getPendingRequestsForType(homeId, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRequestTypes = function getRequestTypes (req, res, next) {
  RequestController.getRequestTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.respondToRequest = function respondToRequest (req, res, next, requestId, status) {
  RequestController.respondToRequest(requestId, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
