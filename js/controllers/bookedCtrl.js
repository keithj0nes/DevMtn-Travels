angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $state){

  var id = $state.params.id

  function book(id){
    for (var i = 0; i < mainSrv.travelInfo.length; i++) {
      if (id == mainSrv.travelInfo[i].id) {
        $scope.currentCity = mainSrv.travelInfo[i];
      }
    }

  }

  book(id);

})
