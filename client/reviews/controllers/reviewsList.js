angular.module("raview").controller("ReviewsListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){

    $scope.reviews = $meteor.collection(Reviews);

    $scope.remove = function(party){
      $scope.reviews.splice( $scope.reviews.indexOf(party), 1 );
    };
}]);