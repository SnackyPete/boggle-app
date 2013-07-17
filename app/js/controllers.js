'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('BoggleCtrl', ['$scope', 'boardBuilderService', function(scope, boardBuilderService) {

	boardBuilderService.generateBoard();
	scope.horizontal = boardBuilderService.characterArrays.horizontal;

}]);
