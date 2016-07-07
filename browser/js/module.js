'use strict';

var juke = angular.module('juke', ['ui.router']);


juke.config(function($stateProvider){
  $stateProvider.state('allAlbums',{
    url:'/albums',
    templateUrl: '../htmlTemplates/allAlbums.html',
    resolve: {
      albums: function (AlbumFactory){
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  })
  .state('allArtists', {
    url: '/artists',
    templateUrl: '../htmlTemplates/allArtists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller:  'ArtistsCtrl'
  })
  .state('album', {
    url: '/album/:id',
    templateUrl: '../htmlTemplates/album.html',
    resolve:{
      album: function(AlbumFactory, $stateParams){
        return AlbumFactory.fetchById($stateParams.id)
      }
    },
    controller: 'AlbumCtrl'
  })
  .state('artist', {
    url: '/artist/:id',
    templateUrl:'../htmlTemplates/artist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('artist.songs', {
    url:'/songs',
    templateUrl: '../htmlTemplates/artistSongs.html'
  })
    .state('artist.albums', {
    url:'/albums',
    templateUrl: '../htmlTemplates/artistAlbums.html'
  })
})
