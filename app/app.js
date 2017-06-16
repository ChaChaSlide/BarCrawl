import appComponent from './app.component';
import homeComponent from './components/homelocation/home.component';
import mapComponent from './components/map/map.component';
import nearestComponent from './components/nearest/nearest.component';


angular.module('app', [])
.component('app', appComponent)
.component('home', homeComponent)
.component('map', mapComponent)
.component('nearest', nearestComponent)