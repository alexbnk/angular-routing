app.factory('hebrewData', function($http) {

  var hebcal="http://www.hebcal.com/shabbat/?cfg=json&geo=pos&latitude=32.17819&longitude=34.90761&tzid=Asia/Jerusalem";


  var getHebInfo = function() {

       return $http.get(hebcal)
           .then(function(response) {
               console.log(response.data)//play with data
               return response.data;
               //  angular.copy(response.data, beers);
           }, function(err){
             console.error(err);
           });
   };
return {getHebInfo:getHebInfo};

});
