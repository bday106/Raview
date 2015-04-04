angular.module("raview").controller("ReviewDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){

    $scope.review = $meteor.object(Reviews, $stateParams.reviewId);

}]);