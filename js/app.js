var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.title = 'Excuse My French!';
  $scope.descrip = 'International Curse Word Generator';
  $scope.tagy = 'Click the button below to generate a curse word in some random language and enhance your colorful vocabulary for any situation!';
  $scope.wordArr = [{
    word: 'Merde',
    language: 'Language: French',
    trans: 'Translation: Shit'

  }, {
    word: 'Mierda',
    language: 'Language: Spanish',
    trans: 'Translation: Shit'
  }, {
    word: 'Bastardo',
    language: 'Language: Spanish',
    trans: 'Translation: Bastard'
  }, {
    word: 'ちくしょう (chikusho)',
    language: 'Language: Japanese',
    trans: 'Translation: Shit'
  }, {
    word: '王八 (wáng bā)',
    language: 'Language: Mandarin Chinese',
    trans: 'Translation: Bastard'
  }];

  $scope.showWord = $scope.wordArr[Math.floor(Math.random() * $scope.wordArr.length)];
  $scope.clearIt = function(){
    window.location.reload();  
  };


}]);
