var firebaseConfig = {
    apiKey: "AIzaSyAtS0b7DEGIg1c7tDylab7Zq9c1o1vkYgc",
    authDomain: "giftastic-1aa22.firebaseapp.com",
    databaseURL: "https://giftastic-1aa22.firebaseio.com",
    projectId: "giftastic-1aa22",
    storageBucket: "giftastic-1aa22.appspot.com",
    messagingSenderId: "319648090637",
    appId: "1:319648090637:web:7605b4acaf393f11692344",
    measurementId: "G-W09JL12XDP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = firebase.firestore()

const email = $("#email").val().trim();
const password = $("#password").val().trim();

$(document).ready(function () {
    $("#sign-up").on("click", function () {
        $("#login-modal").fadeIn(600).css("display", "block")
    });
    $("#login").on("click", function(){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            
          });
    });
    $("#register").on("click", function(){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
           
          });
    });
});