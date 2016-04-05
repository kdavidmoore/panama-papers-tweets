$(document).ready(function(){
  var mainNav = $('#update-tweets');
  var headerHeight = $('#header').height();

  $(window).scroll(function(){
    if($(this).scrollTop() > headerHeight){
      mainNav.addClass('navbar-scrolled');
      $('#views').addClass('margin-adjust');

    }else{
      mainNav.removeClass('navbar-scrolled');
      $('#views').removeClass('margin-adjust');
    }
  });
});

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