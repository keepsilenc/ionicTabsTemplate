// tab功能路由


angular.module('tab.route', ['tab.controller'])



  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('tab',{
        url:'/tab',
        abstract:true,
        templateUrl:'areas/tab/tab.html',
        controller:'TabsCtrl'
      })



  });
