var api = {
	getEvent(){
	  	var url = 'http://eventurer.co/backend/android/getVenue.php';
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;