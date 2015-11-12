(function (ng) {
    'use strict';
    ng.controller('todoController', ['$scope', function ($scope) {
        $scope.countCompletedTasks = function countCompletedTasks() {
            return _.where($scope.tasks, { done: true }).length;
        };

        $scope.countRemainingTasks = function countRemainingTasks() {
            return $scope.tasks.length - $scope.countCompletedTasks();
        };

        $scope.completedAllTasks = function completedAllTasks() {
            return $scope.countRemainingTasks() === 0;
        };

        $scope.addTask = function addTask() {
            if ($scope.newTask) {
                $scope.tasks.push({ text: $scope.newTask, done: false });
                $scope.newTask = null;
            }
        };

        $scope.deleteTask = function deleteTask(task) {
            var taskIndex = $scope.tasks.indexOf(task);
            if (taskIndex !== -1) {
                $scope.tasks.splice(taskIndex, 1);
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
