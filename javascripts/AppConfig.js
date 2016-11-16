"use strict";

// ****!!THIS IS WHERE WE WILL CALL FIREBASE!!****
app.run(function(FIREBASE_CONFIG){ // this is where you are USING firebase DB
  firebase.initializeApp(FIREBASE_CONFIG);
});
