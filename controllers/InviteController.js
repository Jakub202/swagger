'use strict';

var utils = require('../utils/writer.js');
var InviteController = require('../service/InviteControllerService');

module.exports.acceptInvite = function acceptInvite (req, res, next, inviteId) {
  InviteController.acceptInvite(inviteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.declineInvite = function declineInvite (req, res, next, inviteId) {
  InviteController.declineInvite(inviteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInvite = function deleteInvite (req, res, next, inviteId) {
  InviteController.deleteInvite(inviteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPendingInvites = function getPendingInvites (req, res, next, userEmail) {
  InviteController.getPendingInvites(userEmail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSentInvitesFromHome = function getSentInvitesFromHome (req, res, next, homeId) {
  InviteController.getSentInvitesFromHome(homeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendInvite = function sendInvite (req, res, next, body) {
  InviteController.sendInvite(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
