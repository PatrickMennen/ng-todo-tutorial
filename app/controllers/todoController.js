(function (ng) {
    'use strict';
    ng.controller('todoController', ['$scope', function ($scope) {
        $scope.countCompletedTasks = function countCompletedTasks() {
            return _.where($scope.tasks, { done: true }).length;
        };

        $scope.completedAllTasks = function countCompletedTasks() {
            return $scope.countCompletedTasks() === $scope.tasks.length;
        };

        $scope.addTask = function addTask() {
            if ($scope.newTask) {
                $scope.tasks.push({ text: $scope.newTask, done: false });
                $scope.newTask = null;
            }
        };

        $scope.tasks = [
            { text: 'Remember that Angular is NOT jQuery', done: false },
            { text: 'Bring milk', done: false },
            { text: 'Learn how to code angular', done: false },
            { text: 'Start this tutorial', done: true }
        ];
    }]);
})(angular.module('todoApp'));
