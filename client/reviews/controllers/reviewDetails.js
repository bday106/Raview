angular.module("raview").controller("ReviewDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){

    $scope.item = $meteor.object(Items, $stateParams.itemId);

    $scope.reviews = $meteor.collection(Reviews);

    $scope.push = function(review) {
    	$scope.reviews.push(review);
    }

    $scope.remove = function(review) {
    	$scope.reviews.remove(review);
    }
}]);