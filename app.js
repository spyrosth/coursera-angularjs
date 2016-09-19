(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {


$scope.countDishes = function () {
    if (displayDishes($scope.LunchMenu) <= 3) {
		$scope.LunchWarning="Enjoy!";}
	else if (displayDishes($scope.LunchMenu) > 3) {
		$scope.LunchWarning="Too much!";}
};

};


function displayDishes (string) {
	var content = string;
	var totalDishes = content.split(','); 
	return totalDishes.length;
};


})();
