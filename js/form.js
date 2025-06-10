// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
  
//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const phone = document.getElementById("phone");
//     const message = document.getElementById("message");
  
//     if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
//       alert("Please fill in all required fields.");
//       return;
//     }
  
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.value.match(emailPattern)) {
//       alert("Please enter a valid email address.");
//       return;
//     }
  
//     alert("Form submitted successfully!");
//     this.reset();
//   }); 
const form = document.getElementById("contactForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", function (e) {
e.preventDefault();

// Clear previous errors
errorBox.innerText = "";
errorBox.style.display = "none";
const inputs = form.querySelectorAll("input, textarea");
inputs.forEach(i => i.classList.remove("error"));

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

let hasError = false;
let errors = [];

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phonePattern = /^[0-9\+]{10,15}$/;

if (name.value.trim() === "") {
    name.classList.add("error");
    errors.push("Name is required.");
    hasError = true;
}

if (!emailPattern.test(email.value.trim())) {
  email.classList.add("error");
  errors.push("Valid email is required.");
  hasError = true;

  const emailValue = email.value.trim();

    if (
    emailValue === "" ||
    !emailValue.includes("@") ||
    !emailValue.includes("gmail") ||
    !emailValue.includes(".com")
    ) {
    email.classList.add("error");
    errors.push("Email must include '@', 'gmail', and '.com'.");
    hasError = true;
    }
}


if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add("error");
    errors.push("Valid phone number is required.");
    hasError = true;

    if (phone.value.trim() === "" || phone.value.length < 11) {
        phone.classList.add("error");
        errors.push("Phone number must be at least 11 digits.");
        hasError = true;
    }
}

if (message.value.trim() === "") {
    message.classList.add("error");
    errors.push("Message cannot be empty.");
    hasError = true;
}

if (hasError) {
    errorBox.innerText = errors.join("\n");
    errorBox.style.display = "block";
    return;
}

// All good – simulate submission
alert("Message sent successfully!");
form.reset();
});
