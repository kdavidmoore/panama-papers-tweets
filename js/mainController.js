var tweetsApp = angular.module('tweetsApp', ['ngRoute']);

tweetsApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'mainController'
	});
	// send the user back to the home page if the route is not valid
	$routeProvider.otherwise({
		redirectTo: 'pages/front.html'
	});
});

tweetsApp.controller('mainController', function($scope, $http){
	$scope.message = 'Hello, world!';

	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';

	$http.get(searchUrl).success(function(data){
		console.log(data);
		$scope.tweets = data.statuses;
		console.log($scope.tweets);
	});
});