var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

// Preparation - runs before the application runs
myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });

}]);

// myNinjaApp.run(function(){
//     // Fires when the application runs
// });

// myNinjaApp.controller('NinjaController', function($scope){
// Variable names sometimes need to be protected from minification
myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

    // The scope object is the binding between
    // the HTML view and the JS controller

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });  

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
        
    };

    $http({
        method: 'GET',
        url: 'data/ninjas.json'
     }).then(function(response){
        $scope.ninjas = response.data;
     }); 

}]);