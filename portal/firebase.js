var app_firebase={};
(function(){

  // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBFgZVnGiNB2fkFFK7AVmIo5IJ49jqqrqM",
  authDomain: "stroke-analysis.firebaseapp.com",
  databaseURL: "https://stroke-analysis.firebaseio.com",
  projectId: "stroke-analysis",
  storageBucket: "stroke-analysis.appspot.com",
  messagingSenderId: "302979947505"
  };
  firebase.initializeApp(config);

  app_firebase=firebase;

})()