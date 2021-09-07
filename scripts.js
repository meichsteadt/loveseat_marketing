$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('.tooltipped').tooltip();
  M.textareaAutoResize($('textarea'));
  $("#contact-form").on('submit', function(event) {
    event.preventDefault();
    var email = $('form input[name=email]').val();
    var name = $('form input[name=name]').val();
    var storeName = $('form input[name=storeName]').val();
    var numStores = $('form input[name=numStores]').val();
    var message = $('form textarea[name=message]').val();
    var allInterests = $('form input[type=checkbox]').map(function() {return this.name}).get();
    var interestData = {};
    allInterests.forEach(function(int) { interestData[int] = false;})
    $('form input[type=checkbox]:checked').each(function() {
      interestData[this.name] = true;
    });

    var data = {
      "lead": {
        "email": email,
        "name": name,
        "store_name": storeName,
        "num_stores": numStores,
        "message": message,
        "interests": interestData,
      }
    }
    $("input").val(null);
    M.toast({html: "<p>Thank you for reaching out! We'll be contacting you very shortly!</p>"})
    this.reset();
    postLead(data);
  });

  function postLead(data) {
    $.post("https://www.loveseat.co/leads", data)
  }
});
