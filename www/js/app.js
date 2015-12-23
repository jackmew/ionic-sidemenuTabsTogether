(function() {

var app = angular.module('demo', ['ionic']);

app.controller('SidemenuTabsCtrl', function($scope) {
  alert("test");
  $scope.str = "sidemenu & tabs";
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('root', {
          url : '/root',
          templateUrl : 'root.html',
          controller : 'RootPageController'
      })
      $urlRouterProvider.otherwise('/root');
}]);

    app.controller('RootPageController', function($scope, $ionicSideMenuDelegate) {
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

// angular.module('demo', ['ionic'])

//     .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

//         $stateProvider
//             .state('root', {
//                 url : '/root',
//                 templateUrl : 'root.html',
//                 controller : 'RootPageController'
//             })

//             .state('fst', {
//                 url : '/fst',
//                 templateUrl : 'fst-abstract.html',
//                 abstract : true,
//                 controller : 'FstController'
//             })
//             .state('fst.home', {
//                 url: '/home',
//                 views: {
//                     'fst': {
//                         templateUrl: 'fst-home.html',
//                         controller : 'FstHomePageController'
//                     }
//                 }
//             })
//             .state('fst.first', {
//                 url: '/first',
//                 views: {
//                     'fst': {
//                         templateUrl: 'fst-first.html',
//                         controller : 'FstFirstPageController'
//                     }
//                 }
//             })
//             .state('fst.second', {
//                 url: '/second',
//                 views: {
//                     'fst': {
//                         templateUrl: 'fst-second.html',
//                         controller : 'FstSecondPageController'
//                     }
//                 }
//             })

//             .state('snd', {
//                 url : '/snd',
//                 templateUrl : 'snd-abstract.html',
//                 abstract : true,
//                 controller : 'SndController'
//             })
//             .state('snd.home', {
//                 url: '/home',
//                 views: {
//                     'snd': {
//                         templateUrl: 'snd-home.html',
//                         controller : 'SndHomePageController'
//                     }
//                 }
//             })
//             .state('snd.chat', {
//                 url: '/chat',
//                 views: {
//                     'snd': {
//                         templateUrl: 'snd-chat.html',
//                         controller : 'SndChatPageController'
//                     }
//                 }
//             })
//             .state('snd.chat-single', {
//               url: '/chat-single',
//               views: {
//                 'snd': {
//                   templateUrl: 'snd-chat-single.html',
//                   controller : 'SndChatSinglePageController'
//                 }
//               }
//             })
//             .state('snd.drink', {
//                 url: '/drink',
//                 views: {
//                     'snd': {
//                         templateUrl: 'snd-drink.html',
//                         controller : 'SndDrinkPageController'
//                     }
//                 }
//             })
//             .state('snd.policy', {
//                 url: '/policy',
//                 views: {
//                     'snd': {
//                         templateUrl: 'snd-policy.html',
//                         controller : 'SndPolicyPageController'
//                     }
//                 }
//             })

//         $urlRouterProvider.otherwise('/root');
//     }])

//     .controller('RootPageController', function($scope, $ionicSideMenuDelegate) {
//     })

//     .controller('NavController', function($scope, $ionicSideMenuDelegate) {
//       $scope.toggleLeft = function() {
//         $ionicSideMenuDelegate.toggleLeft();
//       };
//     })
//     .controller('FstController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {
//     })

//     .controller('SndController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('SndHomePageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('SndChatPageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('SndChatSinglePageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('SndDrinkPageController', function($scope, $ionicSideMenuDelegate) {
//     })
//     .controller('SndPolicyPageController', function($scope, $ionicSideMenuDelegate) {
//     })


