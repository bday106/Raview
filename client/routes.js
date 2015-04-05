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
      .state('home', {
        url: '/home',
        templateUrl: 'client/reviews/views/home.ng.html',
        controller: 'HomeCtrl'
      })
      .state('reviews', {
        url: '/reviews',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('reviewDetails', {
        url: '/reviews/:reviewId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/home");
  }]);