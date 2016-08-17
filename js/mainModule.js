var tweetsApp = angular.module('tweetsApp', ['ngRoute', 'ngSanitize']);

tweetsApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/front.html',
		controller: 'mainController'
	})
	.when('/lang/en', {
		templateUrl: 'pages/english.html',
		controller: 'enController'
	})
	.when('/lang/es', {
		templateUrl: 'pages/spanish.html',
		controller: 'esController'
	})
	.when('/lang/fr', {
		templateUrl: 'pages/french.html',
		controller: 'frController'
	})
	// if the route is not valid, send the user back to the home page
	.otherwise({
		redirectTo: 'pages/front.html'
	});
});

tweetsApp.controller('mainController', ['$scope', '$http', '$interval', 'TweetsFactory', function($scope, $http, $interval, TweetsFactory){
	TweetsFactory.getTweets().then(function(data) {
		$scope.tweets = data.statuses;
		if (data.statuses.length < 1) {
			$scope.message = 'There are no recent Tweets to display.';
		}

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
			}, 10000);
		}
	});
}]);

tweetsApp.controller('enController', ['$scope', '$http', '$interval', 'TweetsFactory', function($scope, $http, $interval, TweetsFactory){
	TweetsFactory.getTweets().then(function(data) {
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "en") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;
		if (myTweets.length < 1) {
			$scope.message = 'There are no recent Tweets to display in this language.';
		}

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
			}, 10000);
		}
	});
}]);

tweetsApp.controller('esController', ['$scope', '$http', '$interval', 'TweetsFactory', function($scope, $http, $interval, TweetsFactory){
	TweetsFactory.getTweets().then(function(data) {
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "es") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;
		if (myTweets.length < 1) {
			$scope.message = 'There are no recent Tweets to display in this language.';
		}

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
			}, 10000);
		}
	});
}]);

tweetsApp.controller('frController', ['$scope', '$http', '$interval', 'TweetsFactory', function($scope, $http, $interval, TweetsFactory){
	TweetsFactory.getTweets().then(function(data) {
		var allData = data.statuses;
		var myTweets = [];
		var isMinutes = [];
		for (i=0; i<allData.length; i++) {
			if (allData[i].lang == "fr") {
				myTweets.push(allData[i]);
			}
		}
		$scope.tweets = myTweets;
		if (myTweets.length < 1) {
			$scope.message = 'There are no recent Tweets to display in this language.';
		}

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
			}, 10000);
		}
	});
}]);