app.controller("mainCtrl", ['$scope', '$http',
  function($scope, $http) {
    $scope.random = function() {
      var stateJson = {"on": true};
      $http.put('/api/v1/state', stateJson).success(function(data) {
        console.log(data);
      }).error(function(data) {
        console.log(data);
      });
    };

    $scope.allOn = function() {
      var stateJson = {"on": true};
      $http.put('/api/v1/state', stateJson).success(function(data) {
        console.log(data);
      }).error(function(data) {
        console.log(data);
      });
    };

    $scope.allOff = function() {
      var stateJson = {"on": false};
      $http.put('/api/v1/state', stateJson).success(function(data) {
        console.log(data);
      }).error(function(data) {
        console.log(data);
      });
    }
  }
]);
