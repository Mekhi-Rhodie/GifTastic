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
const db = firebase.firestore();
const auth = firebase.auth()
//const database = firebase.database()
const saveMode = {
  saving: false
}

let savedGif = []

auth.onAuthStateChanged(function (user) {
  if (user) {
    db.collection("Gifs").doc(user.email).get().then(function (doc) {
      if (doc.exists) {
          const data = doc.data().gifs
          for(let i = 0; i < data.length; i++){
              console.log(data[i])
              savedGif.push(data[i])
          }
      } else {
          console.log("No such document!");
      }
  }).catch(function (error) {
      console.log("Error getting document:", error);
  });  
  } 
});

$("#search").on("click", function (event) {
  event.preventDefault();
  var submission = $("#submission").val().trim();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + submission + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=15";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < response.data.length; i++) {
      $("#gifs").prepend($("<img>").attr("src", response.data[i].images.original.url));
    }
  });
  $("#submission").empty()
});

$("#save-gif").on("click", function (event) {
  event.preventDefault()
  saveMode.saving = true
  if (saveMode.saving === true) {
    $("#nav").prepend("<button id='save' class='btn btn-primary'>" + "Save" + "</button>")
    $("body").css("opacity", ".80")
    $("img").on("click", function () {
      event.preventDefault()
      const gif = $(this).attr("src");
      $(this).css("box-shadow", "none")
      if (!savedGif.includes(gif)) {
        savedGif.push(gif)
      }
      if(saveMode.saving === false){
        $(this).css("box-shadow", "7px 7px 3px #171c1b")
      }
      console.clear()
      console.log(savedGif)
    })
  }

  $("#save").on("click", function (event) {
    event.preventDefault()
    $(this).css("display", "none")
    $("body").css("opacity", "1")
    $("img").css("box-shadow","7px 7px 3px #171c1b")
    saveMode.saving = false;
    auth.onAuthStateChanged(function (user) {
      if (user) {
        db.collection("Gifs").doc(user.email).set({
          gifs: savedGif
        })
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      }
    });
  });
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

$("#dashboard").on("click", function (event) {
  event.preventDefault()
  window.location.replace("gifs.html")
})

$("#sign-out").on("click", function (event) {
  event.preventDefault();
  firebase.auth().signOut().then(function () {
    window.location.replace("index.html")
  }).catch(function (error) {
    console.log("User not signed out!")
  });
});