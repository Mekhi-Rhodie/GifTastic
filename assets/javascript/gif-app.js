var topics = [];

$("#submit").on("click", function (event) {
  event.preventDefault();
  var submission = $("#submission").val().trim();

  topics.push(submission)

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + submission + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=12";

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