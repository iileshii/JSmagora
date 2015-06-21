var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MainCtrl', function($scope) {
});

'use strict';

angular.module('mgcrea.ngStrapDocs')

    .controller('TypeaheadDemoCtrl', function($scope, $templateCache, $http) {



      $scope.selectedATM = '';
      $scope.getATM = function(viewValue) {
          var params = {property: 'own', limit: '1500', city: '54'};
        return $http.get('http://json.alfabank.ru/atm/0.1/list', {params: params})
            .then(function(res) {
              var objArr = res.data.response.data;
                var myArr = Object.keys(objArr).map(function(k) {
                    objArr[k].title = objArr[k].title.replace("&laquo;", "\"");
                    objArr[k].title = objArr[k].title.replace("&raquo;", "\"");
                    objArr[k].title = objArr[k].title.replace("&nbsp;", " ");
                    objArr[k].address = objArr[k].address.replace("&laquo;", "\"");
                    objArr[k].address = objArr[k].address.replace("&raquo;", "\"");
                    objArr[k].address = objArr[k].address.replace("&nbsp;", " ");
                    return objArr[k];
                });
                var newArray = myArr.filter(function (el) {   return el.title.indexOf(viewValue) > -1 || el.address.indexOf(viewValue) > -1 });
                return newArray;
            });
      };

    });

