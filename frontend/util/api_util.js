var AppDispatcher = require('../dispatcher');
var ApiActions = require('../actions/api_actions');


var ApiUtil = {
  fetchBenches: function(){
    $.get("api/benches", function(data) {
      ApiActions.receiveAll(data);
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
