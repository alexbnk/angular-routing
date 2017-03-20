app.controller('hebCtrl', function($scope, hebrewData, geolocation) {

    geolocation.getLocation()
        .then(function(data) {
            var lat = data.coords.latitude;
            var long = data.coords.longitude;
            $scope.coords = {
                lat: lat,
                long: long
            }


            hebrewData.getGoogleData(lat, long)
                .then(function(city) {
                    //console.log(data);
                    $scope.city = city;
                })

            hebrewData.getHebInfo(lat, long)
                .then(function(data) {
                    // console.log(data);
                    $scope.data = data;
                })



            //return {lat:data.coords.latitude, long:data.coords.longitude};
        });



});
