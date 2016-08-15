tweetsApp.controller('mainController', function($scope, $interval, myFactory){
	$scope.tweets = [];

	// use the factory myFactory
	function submitHash(){
		myFactory.callTwitter().then(function(data){
			$scope.tweets = data.statuses;
			if (data.statuses.length < 1) {
				$scope.message = 'There are no Tweets to display in this language.';
			}
		}, function(err){
			console.log('Something went wrong: ' + data);
		});
	}

	$scope.updateHash = function(){
		myFactory.setHash($scope.userHash);
		submitHash();
	};

	var isMinutes = [];

	for (i=0; i<$scope.tweets.length; i++){
		var time = $scope.tweets[i].created_at;
		var tweetTime = new Date(time);
		$scope.tweets[i].tweetSeconds = tweetTime.getTime() / 1000;
		$scope.tweets[i].timeUnits = 'seconds';
		
		$interval(function(){
			for (i=0; i<$scope.tweets.length; i++){
				var currentDate = new Date();
				var now = currentDate.getTime() / 1000;
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