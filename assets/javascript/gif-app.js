var topics = [
  "naruto",
  "black clover",
  "baka and test",
  "bleach",
  "dragon ball z",
  "my hero academia",
  "mob psycho 100",
  "one punch man",
  "highschool of the dead",
  "heaven's lost property",
  "attack on titan",
  "soul eater",
  "one peice",
  "assassination classroom",
  "fairy tail",
  "gantz",
  "full metal alchemist",
  "keijo",
  "kill la kill",
  "akame ga kill",
  "prison school",
  "no game no life",
  "sword art online"
];

$("#submit").on("click", function (event) {
  event.preventDefault();
  var submission = $("#gif-choice").val().trim();

  topics.push(submission)

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + submission + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < response.data.length; i++) {
      //console.log(response.data[i].images.original.url);
      $("#gifs").prepend($("<img>").attr("src", response.data[i].images.original.url));
    }
    
    console.log(response.data)
  });

$("#gif-buttons").append("<button>" + submission + "</button>")

  for (i = 0; i < topics.length; i++) {
    if (submission === topics[i]) {
        
    };
  };
});