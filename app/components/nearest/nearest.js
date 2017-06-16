'use strict';

import nearestComponent from './nearest.component';


 let nearestModule = angular.module('nearest', [])
.component('nearest', nearestComponent);


export default nearestModule