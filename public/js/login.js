// Initialize Firebase
console.log("Testing");
  var config = {
    apiKey: "AIzaSyDkvPcbmVP-JBsAMR9FJTV31JhwGE-KwuQ",
    authDomain: "social-media-project-b5633.firebaseapp.com",
    databaseURL: "https://social-media-project-b5633.firebaseio.com",
    storageBucket: "social-media-project-b5633.appspot.com",
  };
  firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  const emailLogin = document.getElementById('email-login');
  const password_login = document.getElementById('password-login') ;
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const check_password = document.getElementById('check-password');
  const first_name = document.getElementById('first-name');
  const last_name = document.getElementById('last-name');

  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');
  const logout = document.getElementById('logout');
  const googleSignUp = document.getElementById('googleSignUp');
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefObject2 = firebase.database().ref().child('users');
  function writeUserData(userId, name, email, imageUrl) {
    dbRefObject2.child(email).set({
      uid: userId,
      email: email,
      name: name
    });
  }


  loginBtn.addEventListener('click', e => {

    auth = firebase.auth();
    var emailVal = emailLogin.value;
    var passVal = password_login.value;
    var promise = auth.signInWithEmailAndPassword(emailVal,passVal);
    promise.catch(e => console.log(e.message));
  })

  signupBtn.addEventListener('click', e => {
    console.log("K");
    auth = firebase.auth();
    var emailVal = email.value;
    var passVal = password.value;
    var pass2Val = check_password.value;
    if(passVal == pass2Val){
    var promise = auth.createUserWithEmailAndPassword(emailVal,passVal);
    promise.catch(e => console.log(e.message));
  }
  else{
    alert("You passwords are not the same")
  }
});
logout.addEventListener('click', e => {
  firebase.auth().signOut();
});
googleSignUp.addEventListener('click', e=>{
  firebase.auth().signInWithRedirect(provider);
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    writeUserData(firebaseUser.uid, firebaseUser.displayName, firebaseUser.email, firebaseUser.imageUrl);

    window.location = '/home'
    //console.log(firebaseUser);
    //logout.classList.remove('hide');
}else{
  console.log("Not logged in");

}
});
