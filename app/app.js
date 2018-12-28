var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

// Preparation - runs before the application runs
myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
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
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

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

    $scope.ninjas = [
        {
            name: 'Yoshi',
            belt: 'green',
            rate: 50,
            available: true
        },
        {
            name: 'Crystal',
            belt: 'red',
            rate: 30,
            available: true
        },
        {
            name: 'Ryu',
            belt: 'orange',
            rate: 10,
            available: true
        },
        {
            name: 'Shaun',
            belt: 'black',
            rate: 1000,
            available: true
        }
    ];

}]);