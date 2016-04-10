tweetsApp.factory('myFactory', function($http, $q){
	var service = {};
	var baseUrl = 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=';
	var _hash = '';
	var finalUrl = '';

	service.buildUrl = function(){
		finalUrl = baseUrl + _hash.hash;
		console.log(finalUrl);
		return finalUrl;
	}
	
	service.setHash = function (hash, secondHash){
		_hash = {
			hash: hash,
			secondHash: secondHash
		}
	}

	service.getHash = function(){
		return _hash;
	}

	service.callTwitter = function(){
		service.buildUrl();
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: finalUrl
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject('Sorry. I encountered an error.');
		});
		return deferred.promise;
	}
	return service;
});
