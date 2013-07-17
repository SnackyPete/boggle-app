'use strict';

/* Services */

///////////////////////////////////////////////////////
// Class: BoardBuilder () -
//
function BoardBuilder() {

	this.width = 4;
	this.height = 4;
	this.charcount = 16;

	this.characterArrays = {
		horizontal: [[],[],[],[]],      // 4 rows from top to bottom
		vertical: [[],[],[],[]],        // 4 columns from left to right
		tlbr: [[],[],[],[],[],[],[]],   // 7 diagonal rows from top left to bottom right
		trbl: [[],[],[],[],[],[],[]]    // 7 diagonal rows from top right to bottom left
	};

	this.letterSet = [];                // 16 generated characters for 4x4 the game board

} BoardBuilder.constructor = BoardBuilder;

// Method: generateBoard (seed) - Generate the 16 characters for a Boggle game
// param 'seed' is optional and can be used to recreate a board.  If no seed is specified,
// it will be assigned the current time
// NOTE: Math.random() does not take a seed.  An alternative approach for seeding will be needed.
BoardBuilder.prototype.generateBoard = function (seed) {

	// Generate seed from current time, if not specified
	seed = seed || new Date().getTime();

	var charCode, character, i, j;
	for (i=0; i<this.charcount; i++) {
		// 'A' plus random number between 0-25
		charCode = "A".charCodeAt(0) + Math.floor((Math.random(seed)*25));
		this.letterSet.push(String.fromCharCode(charCode));
	}

	var count = 0;
	for (i=0; i<this.width; i++) {
		for (j=0; j<this.width; j++, count++) {
			this.characterArrays.horizontal[i].push(this.letterSet[count]);
		}
	}

/*
	for (i=0; i<this.width; i++) {
		this.characterArrays.horizontal.forEach(function (value, index, array) {
			this.characterArrays.vertical[i][0].push(value[0]);
			this.characterArrays.vertical[i][1].push(value[1]);
			this.characterArrays.vertical[i][2].push(value[2]);
			this.characterArrays.vertical[i][3].push(value[3]);
		}.bind(this));
	}
*/



};



// Demonstrate how to register services
// In this case it is a simple value service.
var servicesModule = angular.module('myApp.services', []).
  value('version', '0.1');

servicesModule.factory('boardBuilderService', function () {
	return new BoardBuilder();
});

