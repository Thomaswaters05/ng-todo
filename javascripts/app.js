"use strict";

var app = angular.module("TodoApp", []);    //variable of entire app

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Items"}];    // this is making an array and calling it navitems - THESE ITEMS NEED TO MATCH AS THEY DO IN HTML (NAV)
});

app.controller("TodoCtrl", function($scope){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it

  $scope.showListView = true;   // this is using a boolean to show/hide stuff in the div created in the HTML (go to below function ..allitems and newitems)

  $scope.newTask = {}; // this is making a "new task" and assigning it an empty object

  $scope.items = [     //hard coding an array
    {
      id:0,
      task: "Mow the lawn",
      isCompleted: true, //should show up in to do list
      assignedTo: "Tommy"
    },
     {
      id:1,
      task: "Get boxes out the garage", //should show up in completed list
      isCompleted: false,
      assignedTo: "DG"
    },
     {
      id:2,
      task: "Sleep!",
      isCompleted: false, //should show up in completed list
      assignedTo: "Owen"
    },
  ];

  $scope.allItems = function(){   //this is using a click event from index.html aka ng-click() for allItems()
    console.log("you clicked all items");
    $scope.showListView = true;     // this is using a boolean to show stuff in the div created in the HTML

  }

  $scope.newItem = function(){    //this is using a click event from index.html aka ng-click() for newItem()
    console.log("you clicked new item");
    $scope.showListView = false;      // this is using a boolean to hide stuff in the div created in the HTML
  }


  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newTask.id = $scope.items.length; //this will add "3 , 4, 5, 6 , etc to the above array's ID"
    console.log("newTask in function", $scope.newTask);
    $scope.items.push($scope.newTask); //pushes the user input to the new array
    $scope.newTask = {};
    $scope.showListView = true;
  }




});
