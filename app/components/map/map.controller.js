import GoogleMapsLoader from 'google-maps';
import dotenv from '../../../dist/env.json'
GoogleMapsLoader.KEY = dotenv.GOOGLE_KEY;

class mapController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "Bar Crawl";
		ctrl.userAddress ="Initial";
		ctrl.show = false;
		ctrl.$rootScope = $rootScope;
		ctrl.$rootScope.$watch ('home',() =>{
			ctrl.userAddress = ctrl.$rootScope.home;
		});
		console.log(ctrl.userAddress); 
		
		ctrl.$rootScope.$watch('show',() => {
			ctrl.show = ctrl.$rootScope.show;
		})

		GoogleMapsLoader.load((google) => {
	        let map = new google.maps.Map(document.getElementById('map'), {
	        center: {
	        	lat: 32.746152,
	        	lng: -117.159194
	        },
	         zoom: 15
	        });

		let myLatLng = {lat: 32.746152, lng: -117.159194 };
		let marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'hello world'
		});
		});

		//ctrl.cords =[];

 
	};
	mapData(){
		const ctrl = this;
		$.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=273+E+Maxwell+st+lexington+ky&key=AIzaSyBCaY59z9Lwl1jIOakmOhoBKIH5iqi1fUs&callback',
			dataType: 'json',
			success: function(data){
				ctrl.cords = {
					lng: data.results[0].geometry.location.lng,
					lat: data.results[0].geometry.location.lat
				}
			}
		})
	}
};



console.log('mapCtrl is working');


export default mapController;