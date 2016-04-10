var tweetsApp = angular.module('tweetsApp', ['ngRoute', 'ngSanitize']);

tweetsApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'index.html',
		controller: 'mainController'
	});
	// send the user back to the home page if the route is not valid
	$routeProvider.otherwise({
		redirectTo: 'index.html'
	});
});