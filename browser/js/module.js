'use strict';

var juke = angular.module('juke', ['ui.router']);


juke.config(function($stateProvider){
  $stateProvider.state('allAlbums',{
    url:'/albums',
    templateUrl: '../htmlTemplates/allAlbums.html',
    controller: 'AlbumsCtrl'
  })
  .state('allArtists', {
    url: '/artists',
    templateUrl: '../htmlTemplates/allArtists.html',
    controller:  'ArtistsCtrl'
  })
  .state('album', {
    url: '/album/:id',
    templateUrl: '../htmlTemplates/album.html',
    controller: 'AlbumCtrl'
  })
})
