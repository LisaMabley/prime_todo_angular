var app = angular.module('todo', []);

app.controller('MainController', function($scope) {
  $scope.item = '';
  $scope.list = [];
  $scope.listAdd = function(item) {
    console.log('Adding', item);
    $scope.list.push(item);
    console.log($scope.list);
  }
  // $scope.listRemove = function(item) {
  //   console.log('Removing', item);
  //   var index = $scope.list.indexOf(item);
  //   if (index > 0) {
  //     index = 0 - index;
  //   }
  //   console.log(index);
  //   $scope.list.splice(index, 1);
  //   console.log($scope.list);
  // }
})
