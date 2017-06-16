import template from './nearest.html';
import controller from './nearest.controller';


let nearestComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

console.log('nearestComponent');

export default nearestComponent;