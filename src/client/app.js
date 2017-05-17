import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'angular-strap/dist/angular-strap.compat.js';
import 'angular-strap/dist/angular-strap.tpl.js';

import DefaultAlertTemplate from './shared/alert.pug';

import appDirective from './app.directive';
import Router from './routes';

const appDependencies = [
    'ui.router',
    'ui.bootstrap',
    'mgcrea.ngStrap',
];
let appModule = angular.module('app', appDependencies);

appModule
    .directive('app', appDirective)
    .config( /* @ngInject */ ($bsAlertProvider) => {
        angular.extend($bsAlertProvider.defaults, {
            duration: 5,
            placement: 'top',
            container: "#appAlerts",
            show: true,
            templateUrl: false,
            template: DefaultAlertTemplate()
        });
    })
    .config(Router);