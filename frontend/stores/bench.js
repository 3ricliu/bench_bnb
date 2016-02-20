var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var _benches = [];
var BenchConstants = require('../constants/bench_constants');
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function(benches){
_benches = benches;
};

BenchStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
