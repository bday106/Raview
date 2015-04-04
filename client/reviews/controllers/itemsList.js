angular.module("raview").controller("ItemsListCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){

    $scope.reviews = $meteor.object(Reviews, $stateParams.reviewId);

}]);