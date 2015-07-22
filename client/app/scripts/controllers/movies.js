'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', ["$scope", "Movie", function ($scope, Movie) {

    $scope.movies = Movie.getList().$object;  // Use restangular to query list
    // Static Movie List
    // [
    //   {
    //     title: "A New Hope",
    //     url: "https://www.youtube.com/embed/1g3_CFmnU7k"
    //   },
    //   {
    //     title: "The Empire Strikes Back",
    //     url: "https://www.youtube.com/embed/8Hm-9Sai9To"
    //   },
    //   {
    //     title: "Return of the Jedi",
    //     url: "https://www.youtube.com/embed/5UfA_aKBGMc"
    //   }
    // ];
  }]);
