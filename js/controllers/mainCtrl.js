/*global motion */
(function () {
'use strict';

/**
 * The main controller for the app. 
 */
motion.controller('mainCtrl', function mainCtrl($scope) {
  var TIME = 15 * 60;

  window.setInterval(function(){
      $scope.newDate = new Date();
      $scope.dateTime = $scope.newDate.toLocaleTimeString();
      $scope.$apply();
    }, 1000);

  $scope.startCountdown = function(){
    $scope.date = new Date();

    window.setInterval(function(){
      $scope.newDate = new Date();
      var time = $scope.newDate - $scope.date;
      console.log(time/1000);

      $scope.time = Math.floor(TIME - time/1000);
      // $scope.$apply();
    }, 1000);
  };
});

})();