app.controller('hebCtrl', function($scope, hebrewData) {

    hebrewData.getHebInfo()
        .then(function(data) {
             console.log(data);
            $scope.data = data;
        })
});
