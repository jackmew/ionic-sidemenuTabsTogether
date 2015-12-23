(function() {

var app = angular.module('demo', ['ionic']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  // root 
  $stateProvider.state('root', {
      url : '/root',
      templateUrl : 'root.html',
      controller : 'RootPageController',
      onEnter: function() {
        console.log("enter root");
      }
  });



  // first section
  $stateProvider.state('fst', {
      url : '/fst',
      templateUrl : 'fst-abstract.html',
      abstract : true,
      controller : 'FstController',
      onEnter: function() {
        console.log("enter first section abstract");
      }
  })
  .state('fst.home', {
      url: '/home',
      views: {
        'fst': {
            templateUrl: 'fst-home.html',
            controller : 'FstHomePageController',
            onEnter: function() {
              console.log("enter first section home");
            }
        }
      }
  })
  .state('fst.first', {
    url: '/first',
    views: {
        'fst': {
            templateUrl: 'fst-first.html',
            controller : 'FstFirstPageController'
        }
    }
  })
  .state('fst.second', {
    url: '/second',
    views: {
        'fst': {
            templateUrl: 'fst-second.html',
            controller : 'FstSecondPageController'
        }
    }
  });


  $urlRouterProvider.otherwise('/root');
}]);

app.controller('RootPageController', function($scope, $ionicSideMenuDelegate) {
  $scope.str = "sidemenu & tabs";
})
.controller('NavController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('FstController', function($scope, $ionicSideMenuDelegate) {
})
.controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {
})
.controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {
})
.controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {
})


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


})();


