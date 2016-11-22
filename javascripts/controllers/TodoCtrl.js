"use strict";

// *** WE ARE NO LONGER USING THIS***

app.controller("TodoCtrl", function($scope, ItemFactory){
  $scope.welcome = "hello";     // this is like a console log AKA it tests it

  $scope.showListView = true;   // this is using a boolean to show/hide stuff in the div created in the HTML (go to below function ..allitems and newitems)

  $scope.newTask = {}; // this is making a "new task" and assigning it an empty object

  $scope.items = [];    //we put this info (data for people/to do items/etc) in FB database

  let getItems = function(){
    ItemFactory.getItemList().then(function(items){
      $scope.items = items;
    })
  }
  getItems();

  ItemFactory.getItemList().then(function(fbItems){
    $scope.items = fbItems;
    console.log("items from controller", fbItems);
  })



  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newTask.id = $scope.items.length; //this will add "3 , 4, 5, 6 , etc to the above array's ID"
    console.log("newTask in function", $scope.newTask);
    // $scope.items.push($scope.newTask); //pushes the user input to the new array (not needed anymore due to FB GETTING the info and placing it in the database)
    ItemFactory.postNewItem($scope.newTask).then(function(itemId){
      getItems();
      $scope.newTask = {};
      $scope.showListView = true;
    })
  }

  $scope.deleteItem = function(itemId){
    console.log('you deleted this');
    ItemFactory.deleteItem(itemId).then(function(response){
      getItems();
    })
  }

});

