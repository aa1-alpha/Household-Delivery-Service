emailjs.init("OoQi5-N99oSSYjhh9");
const form = document.getElementById('form');
const confirm = document.getElementById('confirm');
const link = document.getElementById('protected');
const popupContainer = document.getElementById("popupContainer");

// Set your password here
const correctPassword = "audviklikescoding"; // change this to your actual password

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  emailjs.sendForm("service_gtweha7", "template_qgpow8e", form);
  confirm.innerHTML='Request Sent';
  form.reset();
});

link.addEventListener("click", function(event) {
  event.preventDefault(); // stop default navigation

  // Clear the container in case the pop-up already exists
  popupContainer.innerHTML = "";

  // Create the heading
  const heading = document.createElement("h6");
  heading.textContent = "Please enter passcode to continue";
  popupContainer.appendChild(heading);

  // Create label and input
  const label = document.createElement("label");
  label.textContent = "Password: ";
  const input = document.createElement("input");
  input.type = "password";
  input.name = "password";
  label.appendChild(input);
  popupContainer.appendChild(label);

  // Create submit button
  const btn = document.createElement("button");
  btn.textContent = "Submit";
  popupContainer.appendChild(btn);

  // Handle password check
  btn.addEventListener("click", function() {
    if (input.value === correctPassword) {
      // Password correct → go to protected.html
      window.location.href = "Audvik.html";
    } else {
      alert("Incorrect password!");
      // Remove the pop-up
      popupContainer.innerHTML = "";
    }
  });
});

