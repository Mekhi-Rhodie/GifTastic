$(document).ready(function(){
    const email = $("#email").val().trim();
    const pass = $("#password").val().trim();
    $("#sign-up").on("click", function(){
        $("#login-modal").fadeIn(600).css("display","block")
    });
});