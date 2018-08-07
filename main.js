var mainApp = {};

(function(){
    var firebase=app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid=user.uid;
        }else{
            //redirect to login page
            uid=null;
                window.location.replace("login.html")
        }
      });

function logOut(){
    firebase.auth().signOut();
}
function download()
{ 
  storageRef.child('facescan/HR.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
   /* var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();*/
  
    // Or inserted into an <img> element:
    var img = document.getElementById('HR');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
    // Create a reference with an initial file path and name
//var storage = firebase.storage();
//var pathReference = storage.ref('images/HR.jpg');

// Create a reference from a Google Cloud Storage URI
//var gsReference = storage.refFromURL('gs://stroke-analysis.appspot.com/facescan/HR.jpg ')

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
//var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/stroke-analysis.appspot.com/o/facescan%2FHR.jpg?alt=media&token=f22c187e-0ce6-4661-b8a9-3208608c5bd9');
//storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
 // var xhr = new XMLHttpRequest();
  //xhr.responseType = 'blob';
 // xhr.onload = function(event) {
 //   var blob = xhr.response;
  //};
  //xhr.open('GET', url);
  //xhr.send();

  // Or inserted into an <img> element:
  //var img = document.getElementById('myimg');
  //img.src = url;
//}).catch(function(error) {
  // Handle any errors
//});

}

mainApp.download= download;
mainApp.logout = logOut;
})()