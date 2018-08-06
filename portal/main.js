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
/*function download()
{
    // Create a reference to the file we want to download
var starsRef = storageRef.child('images/HR.jpg');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});
}*/

//mainApp.download= download;
mainApp.logout = logOut;
})()