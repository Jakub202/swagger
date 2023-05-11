'use strict';


/**
 * Create a home
 *
 * body Home 
 * userEmail String 
 * returns Home
 **/
exports.createHome = function(body,userEmail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "location" : {
    "latitude" : 6.027456183070403,
    "longitude" : 1.4658129805029452
  },
  "id" : 0,
  "users" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a home and all related items
 *
 * homeId Long 
 * returns String
 **/
exports.deleteHome = function(homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit the location for a home
 *
 * homeID Long 
 * latitude Double 
 * longitude Double 
 * returns String
 **/
exports.editLocation = function(homeID,latitude,longitude) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit the name for a home
 *
 * homeID Long 
 * name String 
 * returns String
 **/
exports.editName = function(homeID,name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the roles possible for a home
 *
 * returns List
 **/
exports.getAllRoles = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a home by it's id
 *
 * homeID Long 
 * returns Home
 **/
exports.getHomeByID = function(homeID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "location" : {
    "latitude" : 6.027456183070403,
    "longitude" : 1.4658129805029452
  },
  "id" : 0,
  "users" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all the homes a user is involved with
 *
 * userEmail String 
 * returns List
 **/
exports.getHomesForUser = function(userEmail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "location" : {
    "latitude" : 6.027456183070403,
    "longitude" : 1.4658129805029452
  },
  "id" : 0,
  "users" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  } ]
}, {
  "name" : "name",
  "location" : {
    "latitude" : 6.027456183070403,
    "longitude" : 1.4658129805029452
  },
  "id" : 0,
  "users" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "password" : [ "", "" ],
    "salt" : [ "", "" ],
    "homeUserRoles" : [ {
      "role" : "EIER",
      "id" : 5
    }, {
      "role" : "EIER",
      "id" : 5
    } ],
    "homes" : [ null, null ],
    "email" : "email"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the role for the user in a home
 *
 * userEmail String 
 * homeID Long 
 * returns String
 **/
exports.getRoleForUserInHome = function(userEmail,homeID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the users from a home
 *
 * homeID Long 
 * returns List
 **/
exports.getUsersInHome = function(homeID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : [ "", "" ],
  "salt" : [ "", "" ],
  "homeUserRoles" : [ {
    "role" : "EIER",
    "id" : 5
  }, {
    "role" : "EIER",
    "id" : 5
  } ],
  "homes" : [ null, null ],
  "email" : "email"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : [ "", "" ],
  "salt" : [ "", "" ],
  "homeUserRoles" : [ {
    "role" : "EIER",
    "id" : 5
  }, {
    "role" : "EIER",
    "id" : 5
  } ],
  "homes" : [ null, null ],
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Leave a home
 *
 * homeId Long 
 * returns String
 **/
exports.leaveHome = function(homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a user from a home
 *
 * userEmail String 
 * homeId Long 
 * returns String
 **/
exports.removeUserFromHome = function(userEmail,homeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a user's role in a home
 *
 * userEmail String 
 * homeId Long 
 * newRole String 
 * returns String
 **/
exports.updateUserRole = function(userEmail,homeId,newRole) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

