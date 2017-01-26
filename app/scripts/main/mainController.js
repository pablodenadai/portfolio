'use strict';

angular.module('portfolio').controller('MainCtrl', function($scope, $anchorScroll) {

	// Default profile picture
	$scope.profileImagePath = './images/profile.jpg';

	// Update the profile with the dino picture (konami code)
	$scope.unleashTheDinosaur = function() {
		$scope.profileImagePath = './images/profile-dinosaur.jpg';

		// Scroll to the top.
		$anchorScroll();
	};

	$scope.bio = [
		'Over <b>10 years of experience</b> in software development',
		'<b>Thousands of users</b> access daily tools I have created',
		'Have worked with some of the <b>biggest banks in the world</b>'
	];

	$scope.people = [{
		'title': 'Larissa Khenner',
		'subtitle': 'ANZ Bank — Online Producer',
		'description': 'Pablo worked with ANZ dev team on a range of financial tools and calculators. His skills are exceptional plus he is very friendly and easy to work with.',
		'photo': 'larrisa.jpg'
	}, {
		'title': 'Alistair Bruce',
		'subtitle': 'Widget Works — Director',
		'description': 'Pablo has excellent technical skills, good attention to detail and is a team player; everything you look for in a top class developer.',
		'photo': 'alistair.jpg'
	}, {
		'title': 'Coridyn Fitzgerald-Hood',
		'subtitle': 'Widget Works — Technical Director',
		'description': 'Pablo is one of the best and most capable developers that I have ever worked with. He\'s an asset to any team and I would have him on my team any day of the week.',
		'photo': 'coridyn.jpg'
	}];

	$scope.projects = {
		'ANZ Foreign Exchange Calculator': 'anz-fx.jpg',
		'GBST Calculator Management Console': 'gbst-calc.jpg',
		'ANZ Borrowing Power Calculator': 'anz-bp.jpg',
		'NAB Cash Flow Calculator': 'nab-cf.jpg'
	};

	$scope.companies = {
		'Barclays': 'barclays.png',
		'Australia and New Zealand Banking Group': 'anz.png',
		'National Australia Bank': 'nab.png',
		'GE Money': 'ge.png',
		'Qantas Credit Union': 'qantas.png',
		'Esanda Finance Corporation': 'esanda.png',
		'OnePath Financial Services': 'onepath.png',
		'KiwiBank': 'kiwibank.png',
		'GBST': 'gbst.png'
	};

	$scope.technologies = {
		'JavaScript': 'js.png',
		'ECMAScript 6': 'es6.png',
		'HTML5': 'html5.png',
		'CSS3': 'css3.png',
		'ReactJS': 'react.png',
		'Redux': 'redux.png',
		'GraphQL': 'graphql.png',
		'RxJS': 'rxjs.svg',
		'AngularJS': 'angularjs.png',
		'Angular2': 'angular2.png',
		'Protractor': 'protractor.png',
		'TypeScript': 'typescript.png',
		'NodeJS': 'nodejs.png',
		'NPM': 'npm.png',
		'Express': 'express.png',
		'MongoDB': 'mongodb.png',
		'Gulp': 'gulp.png',
		'Webpack': 'webpack.svg',
		'SASS Lang': 'sass.png',
		'AVA': 'ava.png',
		'Git': 'git.png'
	};

	$scope.experiments = {
		'D3': 'd3.svg'
	};

});
