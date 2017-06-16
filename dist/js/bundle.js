(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app4.default.$inject = ['$rootScope', '$interval'];

var appComponent = {
	template: _app2.default,
	controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl() {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "<h1>Bar Crawl</h1>\n<home></home>\n<!-- <ua></ua> -->\n";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _home = require('./components/homelocation/home.component');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import uaComponent from './components/useragreement/ua.component'


angular.module('app', []).component('app', _app2.default).component('home', _home2.default
// .component('ua',uaComponent)
);

},{"./app.component":1,"./components/homelocation/home.component":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _home = require('./home.html');

var _home2 = _interopRequireDefault(_home);

var _home3 = require('./home.controller');

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponent = {
	bindings: {},
	template: _home2.default,
	controller: ['$rootScope', '$interval', _home4.default],
	controllerAs: '$ctrl'
};

console.log('HomeComponent');

exports.default = homeComponent;

},{"./home.controller":6,"./home.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeController = function () {
	function homeController($rootScope, $interval) {
		_classCallCheck(this, homeController);

		var ctrl = this;
		ctrl.title = "Bar Crawl";
		ctrl.$rootScope = $rootScope;
		console.log('home constructor');
	}

	_createClass(homeController, [{
		key: "home",
		value: function home(homeAddress) {
			var ctrl = this;
			// let y = document.getElementById("homeAddress").value;
			// console.log(y);
			ctrl.$rootScope.homeAddress = homeAddress;
			console.log(ctrl.$rootScope.homeAddress);
		}
	}, {
		key: "click",
		value: function click() {
			var ctrl = this;
			var x = document.getElementById("checkBox").checked;
			console.log(x);
			x ? console.log('box is checked') : alert('Please Verify Age');
			// console.log('button is being pressed');
			console.log('hello world');
		}
	}]);

	return homeController;
}();

;

console.log('homeCtrl is working');

exports.default = homeController;

},{}],7:[function(require,module,exports){
module.exports = "\n<div class=\"container\" id=\"home\">\n\t<input class=\"Text\" placeholder=\"Street Address, City, State, ZIP\" id=\"homeAdress\" ng-model=\"$ctrl.homeAddress\">\n</div>\n<div class=\"container\" id=\"ua\">\n\t<input type=\"checkbox\" id=\"checkBox\">\n\t<p> By checking this box you are agreeing to our <a href=\"https://www.youtube.com/watch?v=HMUDVMiITOU\">Terms and Conditions</a></p>\n\t<br />\n\t<button id=\"startButton\" ng-click=\"$ctrl.home($ctrl.homeAddress); $ctrl.click()\">Start Crawl!</button>\n</div>";

},{}]},{},[4]);
