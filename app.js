var app = angular.module('todo', []);

app.controller('MainController', function($scope) {
  $scope.listItemVarNames = [];
  $scope.displayList = [];
  $scope.nextItemNum = 1;

  $scope.listAdd = function(item) {
    var varName = 'item' + $scope.nextItemNum;
    console.log('Adding', item, 'as', varName);
    $scope.listItemVarNames.push(varName);
    $scope[varName] = item;
    $scope.nextItemNum ++;
    reGenerateDisplayList();
  }

  $scope.listRemove = function(item) {
    console.log('Removing', item);
    var varName = getVarNameOfItem(item);
    console.log(varName);
    delete $scope[varName];
    var indexOfVarNameInList = $scope.listItemVarNames.indexOf(varName);
    $scope.listItemVarNames.splice(indexOfVarNameInList, 1);
    reGenerateDisplayList();
  }

  function reGenerateDisplayList() {
    $scope.displayList = [];
    var variableName = '';
    for (var i = 0; i < $scope.listItemVarNames.length; i++) {
      variableName = $scope.listItemVarNames[i];
      $scope.displayList.push($scope[variableName]);
    }
  }

  function getVarNameOfItem(item) {
    var varNameToTest
    for (var i = 1; i < $scope.listItemVarNames.length; i++) {
      varNameToTest = $scope.listItemVarNames[i];
      console.log(varNameToTest);
      if ($scope[varNameToTest] == item) {
        return varNameToTest;
      }
      console.log('Error');
      return undefined;
    }
  }
})
