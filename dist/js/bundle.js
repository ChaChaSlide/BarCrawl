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
module.exports = "<!-- <h1>Bar Crawl</h1> -->\n<home></home> \n<!-- <div class=\"container\">\n<div class=\"row\">\n\t<div class=\"col-xs-4\"> -->\n\t\t<nearest></nearest>\n<!-- \t</div> -->\n<!-- \t<div class=\"col-xs-4\">\n -->\t<map></map> \n<!-- \t</div>\n</div>\n</div> -->";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _home = require('./components/homelocation/home.component');

var _home2 = _interopRequireDefault(_home);

var _map = require('./components/map/map.component');

var _map2 = _interopRequireDefault(_map);

var _nearest = require('./components/nearest/nearest.component');

var _nearest2 = _interopRequireDefault(_nearest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _app2.default).component('home', _home2.default).component('map', _map2.default).component('nearest', _nearest2.default);

},{"./app.component":1,"./components/homelocation/home.component":5,"./components/map/map.component":8,"./components/nearest/nearest.component":11}],5:[function(require,module,exports){
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
		ctrl.cords = [];
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
			x ? ctrl.$rootScope.show = true : alert('Please Verify Age');
			// console.log('button is being pressed');
			console.log('hello world');
		}
	}, {
		key: "mapData",
		value: function mapData() {
			var ctrl = this;
			$.ajax({
				url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Lexington+Ky&key=AIzaSyBCaY59z9Lwl1jIOakmOhoBKIH5iqi1fUs&callback',
				dataType: 'json',
				success: function success(data) {
					ctrl.$rootScope.cords = {
						lng: data.results[0].geometry.location.lng,
						lat: data.results[0].geometry.location.lat
					};
					console.log(ctrl.$rootScope.cords);
				}
			});
		}
	}]);

	return homeController;
}();

;

console.log('homeCtrl is working');

exports.default = homeController;

},{}],7:[function(require,module,exports){
module.exports = "<div ng-hide=\"showme\">\n\t<div class=\"container\" id=\"home\">\n\t\t<input class=\"Text\" placeholder=\"Street Address, City, State, ZIP\" id=\"homeAdress\" ng-model=\"$ctrl.homeAddress\">\n\t</div>\n\t<div class=\"container\" id=\"ua\">\n\t\t<input type=\"checkbox\" id=\"checkBox\">\n\t\t<p> By checking this box you are agreeing to our <a href=\"https://www.youtube.com/watch?v=HMUDVMiITOU\">Terms and Conditions</a></p>\n\t\t<br />\n\t\t<button id=\"startButton\" ng-click=\"$ctrl.home($ctrl.homeAddress); $ctrl.click(); $ctrl.mapData(); showme=true\">Start Crawl!</button>\n\t</div>\n</div>";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _map = require('./map.html');

var _map2 = _interopRequireDefault(_map);

var _map3 = require('./map.controller');

var _map4 = _interopRequireDefault(_map3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapComponent = {
	bindings: {},
	template: _map2.default,
	controller: ['$rootScope', '$interval', _map4.default],
	controllerAs: '$ctrl'
};

console.log('mapComponent');

exports.default = mapComponent;

},{"./map.controller":9,"./map.html":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _googleMaps = require('google-maps');

var _googleMaps2 = _interopRequireDefault(_googleMaps);

var _env = require('../../../dist/env.json');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_googleMaps2.default.KEY = _env2.default.GOOGLE_KEY;

var mapController = function mapController($rootScope, $interval) {
	_classCallCheck(this, mapController);

	var ctrl = this;
	ctrl.title = "Bar Crawl";
	ctrl.userAddress = "Initial";
	ctrl.show = false;
	ctrl.cords = [];
	ctrl.$rootScope = $rootScope;

	ctrl.$rootScope.$watch('home', function () {
		ctrl.userAddress = ctrl.$rootScope.home;
	});
	console.log(ctrl.userAddress);

	ctrl.$rootScope.$watch('show', function () {
		ctrl.show = ctrl.$rootScope.show;
	});

	ctrl.$rootScope.$watch('cords', function () {
		ctrl.cords = ctrl.$rootScope.cords;
	});

	_googleMaps2.default.load(function (google) {
		var directionsService = new google.maps.DirectionsService();
		var directionsDisplay = new google.maps.DirectionsRenderer();
		var myLatLng = { lat: 38.042160, lng: -84.492538 };
		var yourLatLng = { lat: 38.049490, lng: -84.499809 };
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 38.042160,
				lng: -84.492538
			},
			zoom: 15
		});
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'hello world'

		});

		directionsDisplay.setMap(map);

		var onChangeHandler = function onChangeHandler() {
			calculateAndDisplayRoute(directionsService, directionsDisplay);
			console.log('im working dick head');
		};
	});

	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
		directionsService.route({
			'origin': myLatLng,
			'destinaton': yourLatLng,
			'travelMode': 'DRIVING'

		}, function (response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			} else {
				window.alert('directions request failed due to ' + status);
			}
		});
	};
	// });
	// console.log(ctrl.cords.lng);
	// console.log(cords.lng);
	// mapData();
};

;

console.log('Sup doc');

exports.default = mapController;

},{"../../../dist/env.json":14,"google-maps":15}],10:[function(require,module,exports){
module.exports = "    <div id=\"map\" ng-show=\"$ctrl.show\"></div>\n";

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nearest = require('./nearest.html');

var _nearest2 = _interopRequireDefault(_nearest);

var _nearest3 = require('./nearest.controller');

var _nearest4 = _interopRequireDefault(_nearest3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nearestComponent = {
	bindings: {},
	template: _nearest2.default,
	controller: ['$rootScope', '$interval', _nearest4.default],
	controllerAs: '$ctrl'
};

console.log('nearestComponent');

exports.default = nearestComponent;

},{"./nearest.controller":12,"./nearest.html":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nearestController = function nearestController($rootScope, $interval) {
	_classCallCheck(this, nearestController);

	var ctrl = this;
	ctrl.title = "Bar Crawl";
	ctrl.show = false;
	ctrl.place = [{ Name: 'Tin roof', Address: '303 South LimeStone Lexington Ky' }, { Name: 'McCarthy\'s Irish Pub', Address: '177 South Upper Street' }, { Name: 'Centro', Address: '113 Cheapside Lexington' }, { Name: 'The Burl', Address: '375 Thompson Road' }];
	ctrl.$rootScope = $rootScope;

	ctrl.$rootScope.$watch('show', function () {
		ctrl.show = ctrl.$rootScope.show;
	});
	console.log('nearest constructor!!!!!!');
};

console.log('nearestCtrl is working');

exports.default = nearestController;

},{}],13:[function(require,module,exports){
module.exports = "<div id=\"nearest\" ng-show=\"$ctrl.show\">\n<table class=\"table table-bordered\">\n\t<thead>\n\t\t<th>Name</th>\n\t\t<th>Address</th>\n\t</thead>\n\t<tr ng-repeat=\"place in $ctrl.place\">\n\t\t<td>{{place.Name}}</td>\n\t\t<td>{{place.Address}}</td>\n\t</tr>\n</table>\n</div>\t\n";

},{}],14:[function(require,module,exports){
module.exports={"GOOGLE_KEY":"AIzaSyBCaY59z9Lwl1jIOakmOhoBKIH5iqi1fUs"}
},{}],15:[function(require,module,exports){
(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.18';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});

},{}]},{},[4]);
