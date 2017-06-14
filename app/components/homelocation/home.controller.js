class homeController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "Bar Crawl";
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
			(x ? console.log('box is checked') : alert('Please Verify Age'));
		// console.log('button is being pressed');
		console.log('hello world');
	};

};


console.log('homeCtrl is working');


export default homeController;