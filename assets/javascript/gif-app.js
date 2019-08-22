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
    "keijo", "kill la kill", 
    "akame ga kill", 
    "prison school", 
    "no game no life", 
    "sword art online"
];

$("#submit").on("click", function(event){
  event.preventDefault();
  var submission = $("#gif-choice").val().trim();
  document.getElementById("header").innerHTML = submission;
});



    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=15";

    /*$.ajax({
      url: queryURL,top
      method: "GET"
    }).then(function(response) {
      $("#gif-button").click(function(){
        $("gifs").text(response)
      });
    });*/

