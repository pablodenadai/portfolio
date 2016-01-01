'use strict';

angular.module('portfolio', [
	'ngTouch',
	'ngSanitize',

	'mgcrea.ngStrap.tooltip'
]);

angular.module('portfolio').config(function() {

	// Polyfill to fix CSS viewport units
	window.viewportUnitsBuggyfill.init();

	// Console ASCII art :-)
	var consoleAscii = [
		'  _____                 _      _              _                           _         _',
		' / __  \\               | |    | |            | |                         | |       (_)',
		'| | /   ) ____   _____ | |__  | |   ___    __| | _____  ____   _____   __| | _____  _ ',
		'| | \\__/ |  _ \\ (____ ||  _ \\ | |  / _ \\  / _  || ___ ||  _ \\ (____ | / _  |(____ || |',
		'| |____  | |_| |/ ___ || |_) )| | | |_| |( (_| || ____|| | | |/ ___ |( (_| |/ ___ || |',
		' \\_____) |  __/ \\_____||____/  \\_) \\___/  \\____||_____)|_| |_|\\_____| \\____|\\_____||_|',
		'         |_|'
	];

	// Print ASCII art
	angular.forEach(consoleAscii, function(line) {
		console.log(line);
	});

});