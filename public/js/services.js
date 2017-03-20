app.factory('hebrewData', function($http) {


var getGoogleData = function(lat,long) {

    var googlemaps = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=true";

    return $http.get(googlemaps)
        .then(function(response) {
            return response.data.results[0].address_components[2].long_name//play with data here !!!!
        }, function(err){
          console.error(err);
        });

  };






  var getHebInfo = function(lat,long) {
  var hebcal="http://www.hebcal.com/shabbat/?cfg=json&geo=pos&latitude="+lat+"&longitude="+long+"&tzid=Asia/Jerusalem";

       return $http.get(hebcal)
           .then(function(response) {
               //console.log(response.data)//play with data
               return response.data;
               //  angular.copy(response.data, beers);
           }, function(err){
             console.error(err);
           });
   };



return {
  getHebInfo:getHebInfo,
  getGoogleData:getGoogleData
  };

});
