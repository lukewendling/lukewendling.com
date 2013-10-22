var resumeApp = angular.module('resumeApp', []); // no dependencies
resumeApp.factory('Links', function () {
  return {
    resume: {name: 'Resume', url: 'https://docs.google.com/document/d/1WvzCd7QYhnVWc1_tXVAqkRNaCPkBWk_5N19fnL0kQvY/pub'},
    github: {name: 'GitHub', url: 'https://github.com/lukewendling?tab=repositories'},
    linkedin: {name: 'LinkedIn', url: 'http://linkedin.com/in/lukewendling'},
    stats: {name: 'One Month', url: 'http://daytum.com/lukewendling'},
    cover: {name: 'Cover', url: 'https://docs.google.com/document/d/1vT4-6lga_mP_UNJeb8hYGbgslIy3SSPX0mgEYjiddI4/pub'},
    elevator: {name: 'Elevator', url: 'https://github.com/lukewendling/yolo-octo-wookie'}
  };
});

function LinksCtrl($scope, Links) {
  $scope.links = Links;
}