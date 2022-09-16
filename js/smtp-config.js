var ready;

ready = function() {
  function sendEmail(){
    Email.send({
      SecureToken: "7cc38297-0784-4df1-bdb2-d9dafec5df8f",
      To: "michelallangs@gmail.com",
      From: "michelallangs@gmail.com",
      Subject: "Michel, entraram em contato com você!",
      Body: "Name: " + document.getElementById("name").value +
             "<br> Assunto: " + document.getElementById("subject").value +
             "<br> E-mail: " + document.getElementById("email").value +
             "<br> Mensagem: " + document.getElementById("message").value
    }).then(
      message => alert("Mensagem enviada com sucesso!")
    );
  }

  $("#contact-form").submit(function(e) {
    e.preventDefault();

    sendEmail();
    reset();

    return false;
  });

};

$(document).ready(ready);
$(document).on('page:load', ready);