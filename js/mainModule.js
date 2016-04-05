var tweetsApp = angular.module('tweetsApp', ['ngRoute', 'ngSanitize']);

tweetsApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'mainController'
	});
	$routeProvider.when('/lang/en',{
		templateUrl: 'pages/english.html',
		controller: 'enController'
	});
	$routeProvider.when('/lang/es',{
		templateUrl: 'pages/spanish.html',
		controller: 'esController'
	});
	$routeProvider.when('/lang/fr',{
		templateUrl: 'pages/french.html',
		controller: 'frController'
	});
	// send the user back to the home page if the route is not valid
	$routeProvider.otherwise({
		redirectTo: 'pages/front.html'
	});
});

tweetsApp.controller('mainController', function($scope, $http, $interval){
	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';

	$http.get(searchUrl).success(function(data){
		$scope.tweets = data.statuses;
		var isMinutes = [];

		for (i=0; i<$scope.tweets.length; i++){
			var time = $scope.tweets[i].created_at;
			var tweetTime = new Date(time);
			$scope.tweets[i].tweetSeconds = tweetTime.getTime()/1000;
			$scope.tweets[i].timeUnits = 'seconds';
			
			$interval(function(){
				for (i=0; i<$scope.tweets.length; i++){
					var currentDate = new Date();
					var now = currentDate.getTime()/1000;
					$scope.tweets[i].sinceTweeted = Math.floor(now - $scope.tweets[i].tweetSeconds);

					if ($scope.tweets[i].sinceTweeted > 60) {
						$scope.tweets[i].sinceTweeted = Math.floor($scope.tweets[i].sinceTweeted/60);
						$scope.tweets[i].timeUnits = 'minutes';
						isMinutes.push(true);
						if ($scope.tweets[i].sinceTweeted < 2) {
							$scope.tweets[i].timeUnits = 'minute';
						}
					} else {
						isMinutes.push(false);
					}
				}
			}, 1000);
		}
	});
});

tweetsApp.controller('enController', function($scope, $http, $interval){
	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';

	$http.get(searchUrl).success(function(data){
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "en") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;

		for (i=0; i<$scope.tweets.length; i++){
			var time = $scope.tweets[i].created_at;
			var tweetTime = new Date(time);
			$scope.tweets[i].tweetSeconds = tweetTime.getTime()/1000;
			$scope.tweets[i].timeUnits = 'seconds';
			
			$interval(function(){
				for (i=0; i<$scope.tweets.length; i++){
					var currentDate = new Date();
					var now = currentDate.getTime()/1000;
					$scope.tweets[i].sinceTweeted = Math.floor(now - $scope.tweets[i].tweetSeconds);

					if ($scope.tweets[i].sinceTweeted > 60) {
						$scope.tweets[i].sinceTweeted = Math.floor($scope.tweets[i].sinceTweeted/60);
						$scope.tweets[i].timeUnits = 'minutes';
						isMinutes.push(true);
						if ($scope.tweets[i].sinceTweeted < 2) {
							$scope.tweets[i].timeUnits = 'minute';
						}
					} else {
						isMinutes.push(false);
					}
				}
			}, 1000);
		}
	});
});

tweetsApp.controller('esController', function($scope, $http, $interval){
	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';

	$http.get(searchUrl).success(function(data){
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "es") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;

		for (i=0; i<$scope.tweets.length; i++){
			var time = $scope.tweets[i].created_at;
			var tweetTime = new Date(time);
			$scope.tweets[i].tweetSeconds = tweetTime.getTime()/1000;
			$scope.tweets[i].timeUnits = 'segundos';
			
			$interval(function(){
				for (i=0; i<$scope.tweets.length; i++){
					var currentDate = new Date();
					var now = currentDate.getTime()/1000;
					$scope.tweets[i].sinceTweeted = Math.floor(now - $scope.tweets[i].tweetSeconds);

					if ($scope.tweets[i].sinceTweeted > 60) {
						$scope.tweets[i].sinceTweeted = Math.floor($scope.tweets[i].sinceTweeted/60);
						$scope.tweets[i].timeUnits = 'minutos';
						isMinutes.push(true);
						if ($scope.tweets[i].sinceTweeted < 2) {
							$scope.tweets[i].timeUnits = 'minuto';
						}
					} else {
						isMinutes.push(false);
					}
				}
			}, 1000);
		}
	});
});

tweetsApp.controller('frController', function($scope, $http, $interval){
	var searchUrl = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers';

	$http.get(searchUrl).success(function(data){
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "fr") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;

		for (i=0; i<$scope.tweets.length; i++){
			var time = $scope.tweets[i].created_at;
			var tweetTime = new Date(time);
			$scope.tweets[i].tweetSeconds = tweetTime.getTime()/1000;
			$scope.tweets[i].timeUnits = 'secondes';
			
			$interval(function(){
				for (i=0; i<$scope.tweets.length; i++){
					var currentDate = new Date();
					var now = currentDate.getTime()/1000;
					$scope.tweets[i].sinceTweeted = Math.floor(now - $scope.tweets[i].tweetSeconds);

					if ($scope.tweets[i].sinceTweeted > 60) {
						$scope.tweets[i].sinceTweeted = Math.floor($scope.tweets[i].sinceTweeted/60);
						$scope.tweets[i].timeUnits = 'minutes';
						isMinutes.push(true);
						if ($scope.tweets[i].sinceTweeted < 2) {
							$scope.tweets[i].timeUnits = 'minute';
						}
					} else {
						isMinutes.push(false);
					}
				}
			}, 1000);
		}
	});
});