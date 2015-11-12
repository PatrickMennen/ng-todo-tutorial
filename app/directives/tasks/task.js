(function (ng) {
    'use strict';
    ng.directive('task', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                task: '='
            },
            templateUrl: 'app/directives/tasks/task.html'
        };
    }]);
})(angular.module('todoApp'));
