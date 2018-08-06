var app_firebase={};
(function(){

  // Initialize Firebase
 var config = {
    apiKey: "Stoke_Anal",
    authDomain: "stroke-analysis.firebaseapp.com",
    databaseURL: "https://https://stroke-analysis.firebaseio.com",
    projectId: "<Stroke1234>",
    storageBucket: "gs://stroke-analysis.appspot.com",
    messagingSenderId: "chris",
  };
  firebase.initializeApp(config);

  app_firebase=firebase;

})()