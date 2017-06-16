class nearestController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "Bar Crawl";
		ctrl.show = false;
		ctrl.place = [
			{Name:'Tin roof', Address:'303 South LimeStone Lexington Ky'},
			{Name:'McCarthy\'s Irish Pub', Address:'177 South Upper Street'},
			{Name:'Centro', Address:'113 Cheapside Lexington'},
			{Name: 'The Burl', Address:'375 Thompson Road'}
		];
		ctrl.$rootScope = $rootScope;

		ctrl.$rootScope.$watch('show',() => {
			ctrl.show = ctrl.$rootScope.show;
		})
		console.log('nearest constructor!!!!!!');
		
	};

}
console.log('nearestCtrl is working');


export default nearestController;