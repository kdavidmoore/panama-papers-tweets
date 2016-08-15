tweetsApp.factory('TweetsFactory', function($http) {
	function getTweets() {
		return $http({
			method: 'GET',
			url: 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=panamapapers'
		}).then(function successCallback(data) {
			return data.data;
		}, function errorCallback(result) {
			return result.status;
		});
	}

	return {
		getTweets: getTweets
	};
});