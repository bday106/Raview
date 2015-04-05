angular.module("raview").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $location.path("/home");
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
      // .state('itemDetails', {
      //   url: '/item/:itemId',
      //   templateUrl: 'client/reviews/views/item-details.ng.html',
      //   controller: 'ReviewDetailsCtrl'
      // })
      .state('music', {
        url: '/music',
        templateUrl: 'client/reviews/views/music-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      // .state('musicDetails', {
      //   url: '/music/:itemId',
      //   templateUrl: 'client/reviews/views/music-details.ng.html',
      //   controller: 'ReviewDetailsCtrl'
      // })
      .state('jackjohnson', {
        url: '/music/jackjohnson09m821v3',
        templateUrl: 'client/reviews/views/jack-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('nightlife', {
        url: '/nightlife',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('nightlifeDetails', {
        url: '/nightlife/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('food', {
        url: '/food',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('foodDetails', {
        url: '/food/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('furniture', {
        url: '/furniture',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('furnitureDetails', {
        url: '/furniture/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('office', {
        url: '/office',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('officeDetails', {
        url: '/office/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('gaming', {
        url: '/gaming',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('gamingDetails', {
        url: '/gaming/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('android', {
        url: '/android',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('androidDetails', {
        url: '/android/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      })
      .state('vacation', {
        url: '/vacation',
        templateUrl: 'client/reviews/views/reviews-list.ng.html',
        controller: 'ReviewsListCtrl'
      })
      .state('vacationDetails', {
        url: '/vacation/:itemId',
        templateUrl: 'client/reviews/views/review-details.ng.html',
        controller: 'ReviewDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/home");
  }]);