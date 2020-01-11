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
const database = firebase.firestore();
const auth = firebase.auth()


$("#submit").on("click", function (event) {
  event.preventDefault();
  var submission = $("#submission").val().trim();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + submission + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=18";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < response.data.length; i++) {
      $("#gifs").prepend($("<img>").attr("src", response.data[i].images.original.url));
    }    
    console.log(topics)
  });

$("#gif-buttons").prepend("<button class='btn btn-primary'>" + submission + "</button>" )

});

auth.onAuthStateChanged(function (user) {
  if (user) {
      console.log("User is signed in.")
      var email = user.email;
      var uid = user.uid;
      console.log(uid + "  " + email)
  } else {
      console.log("No User")
  }
});

$("#dashboard").on("click", function (event){
    event.preventDefault()
    window.location.replace("gifs.html")
})

$("#sign-out").on("click", function(event){
  event.preventDefault();
  firebase.auth().signOut().then(function() {
    window.location.replace("index.html")
  }).catch(function(error) {
    console.log("User not signed out!")
  });
});