import GoogleMapsLoader from 'google-maps';
import dotenv from '../../../dist/env.json'
GoogleMapsLoader.KEY = dotenv.GOOGLE_KEY;

class mapController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "Bar Crawl";
		ctrl.userAddress ="Initial";
		ctrl.show = false;
		ctrl.cords = [];
		ctrl.$rootScope = $rootScope;
		
		ctrl.$rootScope.$watch ('home',() => {
			ctrl.userAddress = ctrl.$rootScope.home;
		});
		console.log(ctrl.userAddress); 
		
		ctrl.$rootScope.$watch('show',() => {
			ctrl.show = ctrl.$rootScope.show;
		})

		ctrl.$rootScope.$watch('cords',() => {
			ctrl.cords = ctrl.$rootScope.cords
		})

		GoogleMapsLoader.load((google) => {
			let directionsService = new google.maps.DirectionsService;
			let directionsDisplay = new google.maps.DirectionsRenderer;
			let myLatLng = {lat: 38.042160, lng: -84.492538};
			let yourLatLng = {lat: 38.049490, lng: -84.499809};  
	        let map = new google.maps.Map(document.getElementById('map'), {
	        center: {
	        	lat: 38.042160,
	        	lng: -84.492538
	        },
	         zoom: 15
	        });
	        let marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'hello world'

			});

	        directionsDisplay.setMap(map);

	        let onChangeHandler = () => {
	        	calculateAndDisplayRoute(directionsService,directionsDisplay);
			console.log('im working dick head');
	        }; 
	    });


	      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	        	directionsService.route({
	        		'origin': myLatLng,
	        		'destinaton': yourLatLng,
	        		'travelMode': 'DRIVING',

	        	},
	        	function(response, status){
	        		if (status === 'OK'){
	        			directionsDisplay.setDirections(response);
	        		} else{
	        			window.alert('directions request failed due to ' + status);
	        		}
	        	});
	        };
		// });
		// console.log(ctrl.cords.lng);
		// console.log(cords.lng);
		// mapData();
	};
};



console.log('Sup doc');


export default mapController;