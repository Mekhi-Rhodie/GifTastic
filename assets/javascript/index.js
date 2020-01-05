const email = $("#email").val().trim();
const pass = $("#password").val().trim();

$(document).ready(function () {
    $("#sign-up").on("click", function () {
        $("#login-modal").fadeIn(600).css("display", "block")
    });
});