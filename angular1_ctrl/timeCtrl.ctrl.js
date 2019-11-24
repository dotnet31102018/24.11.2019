
// timeCtrl will be the name to summon this ctrl to the html page
module.controller("timeCtrl", TimeCtrl)

// like class TimeCtrl
function TimeCtrl($scope) {
  //alert("Hello from time controller!")

  //this.time = new Date()

  $scope.time = new Date()
  $scope.name = "itay"
  $scope.number = 10

  $scope.increase = () => {
    $scope.number++
  }

}