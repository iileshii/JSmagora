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
              .then(function (res) {
                  return res.data.results;
              });
      };


      $scope.selectedAddress2 = '';
      $scope.getAddress2 = function(viewValue) {
          var params = {property: 'own', limit: '1500', city: '54'};
        return $http.get('http://json.alfabank.ru/atm/0.1/list', {params: params})
            .then(function(res) {
              var objArr = res.data.response.data;
                var myArr = Object.keys(objArr).map(function(k) { return objArr[k] });
                var newArray = myArr.filter(function (el) {   return el.lat > 55.1});
                return myArr;
            });
      };

    });

