$(document).ready(function(){



  $("#email-capture").on('submit', function(e) {
    e.preventDefault();
    $(".email-button").text("Submitting...");
    var baseURL = 'https://us6.api.mailchimp.com/2.0'
    var endPoint = '/lists/subscribe.json'
    var apiKey = '64dc97462eb56374de6ca4d4884fdbde-us6'
    var listID = '7bed3e45bf'
    var email = $(".email-submission").val();
    $.ajax({
      url: baseURL + endPoint,
      type: 'POST',
      data: {"apikey": apiKey, "id" : listID, "email": {"email" : email}},
    }).always(function() {
        alert("Thanks!  Rock on and you'll be hearing from us soon");
        $(".email-submission").val("");
        $(".email-button").text("Submit");

    });
  });
});
