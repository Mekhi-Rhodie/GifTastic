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

const deleteMode = {
    deleting: false
}

let savedGif = []

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("User is signed in.")
        var email = user.email;
        var uid = user.uid;
        console.log(uid + "  " + email)
    } else {
        console.log("No User")
        window.location.replace("index.html")
    }
});

auth.onAuthStateChanged(function (user) {
    if (user) {
        db.collection("Gifs").doc(user.email).get().then(function (doc) {
            if (doc.exists) {
                const data = doc.data().gifs
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i])
                    savedGif.push(data[i])
                    $("#gifs").prepend($("<img>").attr("src", data[i]));
                }
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
});

$("#delete-mode").on("click", function (event) {
    event.preventDefault()
    deleteMode.deleting = true
    console.log(deleteMode)
    if (deleteMode.deleting === true) {
        $("#nav").prepend("<button id='delete' class='btn btn-primary'>" + "Delete" + "</button>")
        $("body").css("opacity", ".80")
        $("img").addClass("selected-gif")
        $("img").on("click", function () {
            event.preventDefault()
            const gif = $(this).attr("src");
            $(this).css("box-shadow", "none")
            $(this).css("display", "none")
            if (savedGif.includes(gif)) {
                const pos = savedGif.indexOf(gif)
                savedGif.splice(pos)
                console.clear()
                console.log(savedGif)
            }
            if (deleteMode.deleting === false) {
                $(this).css("box-shadow", "7px 7px 7px #171c1b")
            }

        })
    }
    $("#delete").on("click", function (event) {
        event.preventDefault()
        $(this).css("display", "none")
        $("img").css("transform", "scale(1)")
        $("body").css("opacity", "1")
        deleteMode.deleting = false;
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
})


$("#giftastic").on("click", function (event) {
    window.location.replace("app.html")
})

$("#sign-out").on("click", function (event) {
    event.preventDefault();
    firebase.auth().signOut().then(function () {
        window.location.replace("index.html")
    }).catch(function (error) {
        console.log("User not signed out!")
    });
});