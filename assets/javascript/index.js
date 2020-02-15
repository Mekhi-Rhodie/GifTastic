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


$("#sign-up").on("click", function (event) {
    event.preventDefault()
    $("#login-modal").fadeIn(600).css("display", "block")
    $(".container ,header, footer").css("filter","blur(4px)")
});

$("#login").on("click", function () {
    event.preventDefault()
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error)
    });
});

$("#register").on("click", function () {
    event.preventDefault()
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error)
    });
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error)
    });
});

$("#close").on("click", function(event){
    $("#login-modal").css("display","none")
    $("#sign-up").css("display","inline")
    $(".container ,header, footer").css("filter","blur(0px)")
})

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("User is signed in.")
        var email = user.email;
        var uid = user.uid;
        console.log(uid + "  " + email)
        window.location.replace("app.html")
    } else {
        console.log("No User")
    }
});