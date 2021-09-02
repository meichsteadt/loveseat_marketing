$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tabs').tabs();
   $('.tooltipped').tooltip();
   
  $("#contact-form").on('submit', function(event) {
    event.preventDefault();
    var email = $('form input[name=email]').val();
    var name = $('form input[name=name]').val();
    var storeName = $('form input[name=storeName]').val();
    var numStores = $('form input[name=numStores]').val();
    var data = {
      "lead": {
        "email": email,
        "name": name,
        "store_name": storeName,
        "num_stores": numStores,
      }
    }
    $("input").val(null);
    this.reset();
    $("#contact-form").replaceWith("<p>Thank you for reaching out! We'll be contacting you very shortly!</p>");
    postLead(data);
  });

  function postLead(data) {
    $.post("https://loveseat.co/leads", data)
  }
});
