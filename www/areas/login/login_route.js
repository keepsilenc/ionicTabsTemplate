angular.module('login.route', ['login.controller','login.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.login', {
        url: '/login',
        views:{
          'tab-login':{
            templateUrl: 'areas/login/login.html',
            controller: 'LoginCtrl'
          }

        }

      })

  });
