'use strict';

angular.module('portfolio').filter('keys', function() {
	return function(input) {
		if (!input) {
			return [];
		}
		return Object.keys(input);
	};
});