"use strict"; //!!ACTING AS AN IFFE!!

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){

  var getItemList = function(){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)  //items.json corresponds to the FB DATABASE ITSELF
      .success(function(response){
        let items = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          items.push(response[key]);
        });
        resolve(items);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      })
    })
  }

  return{getItemList:getItemList}
});