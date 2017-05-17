import template from './app.pug';
import controller from './app.controller';

let appDirective = () => {
    return {
        controller,
        template,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default appDirective;
