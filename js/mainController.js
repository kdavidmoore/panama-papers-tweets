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
})

tweetsApp.controller('mainController', function($scope, $http){
	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';
	$.getJSON(searchUrl, function(searchResults){
		$scope.tweets = searchResults.statuses;
		console.dir($scope.tweets);
	});
	
	/* $http.get(searchUrl).then(function successCallBack(response) {
		$scope.tweets = response.statuses;
		console.log($scope.tweets);
	}, function errorCallBack(response) {
	    console.log("Something went wrong...");
	}); */
})