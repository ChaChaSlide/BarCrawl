class homeController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "Bar Crawl";
		ctrl.cords = [];
		ctrl.$rootScope = $rootScope;
		console.log('home constructor');
		
	};

	home(homeAddress){
		let ctrl = this;
		// let y = document.getElementById("homeAddress").value;
		// console.log(y);
		ctrl.$rootScope.homeAddress = homeAddress;
		console.log(ctrl.$rootScope.homeAddress);

	};
	click(){
		let ctrl = this;
		 let x = document.getElementById("checkBox").checked;
		 console.log(x);
			(x ? (ctrl.$rootScope.show = true) : alert('Please Verify Age'));
		// console.log('button is being pressed');
		console.log('hello world');
		
	};

	mapData(){
		const ctrl = this;
		$.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Lexington+Ky&key=AIzaSyBCaY59z9Lwl1jIOakmOhoBKIH5iqi1fUs&callback',
			dataType: 'json',
			success: function(data){
				ctrl.$rootScope.cords = {
					lng: data.results[0].geometry.location.lng,
					lat: data.results[0].geometry.location.lat
				}
				console.log(ctrl.$rootScope.cords);
			}
		})
	}

};


console.log('homeCtrl is working');


export default homeController;