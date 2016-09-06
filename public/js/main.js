console.log("Testing");
  var config = {
    apiKey: "AIzaSyDkvPcbmVP-JBsAMR9FJTV31JhwGE-KwuQ",
    authDomain: "social-media-project-b5633.firebaseapp.com",
    databaseURL: "https://social-media-project-b5633.firebaseio.com",
    storageBucket: "social-media-project-b5633.appspot.com",
  };
  firebase.initializeApp(config);

const logout = document.getElementById('logout');
const welcome = document.getElementById('welcome');
const object = document.getElementById('object');


const dbRefObject = firebase.database().ref().child('object');
const dbRefObject2 = firebase.database().ref().child('users');
function writeUserData(userId, name, email, imageUrl) {
  dbRefObject2.push({
    uid: userId,
    value: email
  });
}

dbRefObject2.on('value', snap => object.innerText = JSON.stringify(snap.val()));
  logout.addEventListener('click', e => {
    firebase.auth().signOut();
  });
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    writeUserData(firebaseUser.uid, firebaseUser.displayName, firebaseUser.email, firebaseUser.imageUrl);
    console.log(firebaseUser);
    logout.classList.remove('hide');
    welcome.innerText = "Welcome, " + firebaseUser.displayName;

}else{
window.location = '/'
}
});
