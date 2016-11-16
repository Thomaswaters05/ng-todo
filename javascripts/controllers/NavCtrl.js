"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Items"}];    // this is making an array and calling it navitems - THESE ITEMS NEED TO MATCH AS THEY DO IN HTML (NAV)
});
