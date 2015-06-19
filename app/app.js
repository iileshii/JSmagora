var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MainCtrl', function($scope) {
});

'use strict';

angular.module('mgcrea.ngStrapDocs')

    .controller('TypeaheadDemoCtrl', function($scope, $templateCache, $http) {


      $scope.selectedAddress = '';
      $scope.getAddress = function(viewValue) {
        var params = {address: viewValue, sensor: false};
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
            .then(function(res) {
              return res.data.results;
            });
      };

      $scope.selectedAddress2 = '';
      $scope.getAddress2 = function(viewValue) {
        var params = {address: viewValue, sensor: false};
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
            .then(function(res) {
              return res.data.results;
            });
      };

    });

