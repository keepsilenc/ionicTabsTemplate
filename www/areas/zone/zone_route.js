angular.module('zone.route', ['zone.controller','zone.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.zone', {
        url: '/zone',
        views:{
          'tab-zone':{
            templateUrl: 'areas/zone/zone.html',
            controller: 'ZoneCtrl'
          }

        }

      })

  });
