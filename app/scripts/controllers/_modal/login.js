'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:DeckCtrl
 * @description
 * # DeckCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, $auth, $location) {

    $scope.alerts = [];

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.login = function(){
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function() {
          console.log({
            content: 'You have successfully logged in'
          });
          $modalInstance.dismiss('cancel');
        })
        .catch(function(response) {
          $scope.alerts = [];
          $scope.alerts.push({msg: response.data.message});
          console.log({
            content: response.data.message
          });
        });
    };

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          console.log({
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          console.log({
            content: response.data ? response.data.message : response,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
