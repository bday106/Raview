angular.module("raview").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $location.path("/reviews");
    }
  });
}]);

angular.module("raview").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('items', {
        url: '/list',
        templateUrl: 'client/reviews/views/items-list.ng.html',
        controller: 'ItemsListCtrl'
      })
      .state('reviews', {
        url: '/reviews',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('reviewDetails', {
        url: '/reviews/:partyId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/reviews");
  }]);