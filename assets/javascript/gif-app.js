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

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=jZgvmAfsUyAWVLyCKuEAHj8keAQ2zpJ2&limit=15";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#gif-button").click(function(){
        $("gifs").text(response)
      });
    });

