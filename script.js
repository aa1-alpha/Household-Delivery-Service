document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("OoQi5-N99oSSYjhh9");

  const form = document.getElementById('form');
  const confirm = document.getElementById('confirm');
  const link = document.getElementById('protected');
  const popupContainer = document.getElementById("popupContainer");

  const correctPassword = "audviklikescoding"; // your password

  // Form submit
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_gtweha7", "template_qgpow8e", form)
      .then(() => {
        confirm.innerHTML = 'Request Sent';
        form.reset();
        window.location.href = "https://aa1-alpha.github.io/After/index.html";
      }, (error) => {
        confirm.innerHTML = 'Error sending form';
        console.error(error);
      });
  });

  // Password-protected link
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popupContainer.innerHTML = "";

    const heading = document.createElement("h6");
    heading.textContent = "Please enter passcode to continue";
    popupContainer.appendChild(heading);

    const label = document.createElement("label");
    label.textContent = "Password: ";
    const input = document.createElement("input");
    input.type = "password";
    input.name = "password";
    label.appendChild(input);
    popupContainer.appendChild(label);

    const btn = document.createElement("button");
    btn.textContent = "Submit";
    popupContainer.appendChild(btn);

    btn.addEventListener("click", function() {
      if(input.value === correctPassword) {
        window.location.href = "Audvik.html";
      } else {
        alert("Incorrect password!");
        popupContainer.innerHTML = "";
      }
    });
  });
});

