var myNinjaApp = angular.module('myNinjaApp', []);

// myNinjaApp.config(function(){
//     // Preparation
//     // Runs before the application runs
// });

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

    $scope.ninjas = [
        {
            name: 'Yoshi',
            belt: 'green',
            rate: 50,
            available: true
        },
        {
            name: 'Crystal',
            belt: 'yellow',
            rate: 30,
            available: true
        },
        {
            name: 'Ryu',
            belt: 'orange',
            rate: 10,
            available: false
        },
        {
            name: 'Shaun',
            belt: 'black',
            rate: 1000,
            available: true
        }
    ];

}]);