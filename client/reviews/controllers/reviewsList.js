angular.module("raview").controller("ReviewsListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){

  	$scope.items = $meteor.collection(Items);

    $scope.push = function(item) {
    	$scope.items.push(item);
    }
}]);