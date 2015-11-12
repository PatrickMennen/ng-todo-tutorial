(function (ng) {
    'use strict';
    ng.controller('todoController', ['$scope', function ($scope) {
        $scope.tasks = [
            { text: 'Remember that Angular is NOT jQuery', done: false },
            { text: 'Bring milk', done: false },
            { text: 'Learn how to code angular', done: false },
            { text: 'Start this tutorial', done: true }
        ];
    }]);
})(angular.module('todoApp'));
