import appComponent from './app.component';
import homeComponent from './components/homelocation/home.component';
// import uaComponent from './components/useragreement/ua.component'



angular.module('app', [])
.component('app', appComponent)
.component('home', homeComponent)
// .component('ua',uaComponent)