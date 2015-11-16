(function (ng) {
    'use strict';
    ng.directive('task', [ function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                task: '=',
                onDelete: '&'
            },
            templateUrl: 'app/directives/tasks/task.html',
            controller: function ($scope) {
                $scope.toggleEditable = function toggleEditable() {
                    $scope.editable = !$scope.editable;
                };
            }
        };
    }]);
})(angular.module('todoApp'));
