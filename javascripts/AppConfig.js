"use strict";
//THIS IS WHERE YOU PUT YOUR ROUTES AS WELL!!

// ****!!THIS IS WHERE WE WILL CALL FIREBASE!!****
app.run(function(FIREBASE_CONFIG){ // this is where you are USING firebase DB
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider){
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html', //see partials folder- auth- this logs in user
      controller: 'AuthCtrl' // see new controller file
    })
    .when('/items/list', {
      templateUrl: 'partials/item-list.html', //see partials folder
      controller: 'ItemListCtrl' // see new controller file
    })
    .when('/items/new', {
      templateUrl: 'partials/item-new.html',//see partials folder
      controller: 'ItemNewCtrl'// see new controller file
    })
    .when('/items/view/:id',{ //you can call the :id whatever you want, you can call it :crap, but :id makes sense (its a placeholder)
      templateUrl: 'partials/item-view.html',
      controller: 'ItemViewCtrl'
    })
    .when('/items/edit/:id', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl'
    })
    .otherwise('/items/list')

})