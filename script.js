emailjs.init("OoQi5-N99oSSYjhh9");
const form = document.getElementById('form');
const link = document.getElementById('protected');
const popupContainer = document.getElementById("popupContainer");

// Set your password here
const correctPassword = "audviklikescoding"; // change this to your actual password

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  emailjs.sendForm("service_gtweha7", "template_qgpow8e", form);
});

