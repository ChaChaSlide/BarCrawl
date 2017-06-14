import template from './home.html';
import controller from './home.controller';


let homeComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

console.log('HomeComponent');

export default homeComponent;