'use strict';

var juke = angular.module('juke', ['ui.router']);


juke.config(function($stateProvider){
  $stateProvider.state('allAlbums',{
    url:'/albums',
    templateUrl: '../htmlTemplates/allAlbums.html',
    controller: 'AlbumsCtrl'
    })
})
