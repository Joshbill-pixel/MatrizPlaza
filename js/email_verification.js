document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitButton = form.querySelector("button[type='submit']");
    
    let errorMessage = document.createElement("p");

    // Error message styling
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.marginTop = "10px";
    errorMessage.style.display = "none"; // Initially hidden
    form.insertBefore(errorMessage, submitButton);

    // Form validation on submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        let hasError = false;
        let emailValue = emailInput.value.trim();
        let errorText = "";

        // Check for empty fields
        [nameInput, emailInput, passwordInput].forEach(input => {
            if (input.value.trim() === "") {
                hasError = true;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid #ccc";
            }
        });

        // Validate email format
        if (emailValue !== "" && (!emailValue.includes("@") || !emailValue.includes("gmail"))) {
            hasError = true;
            errorText = "The email you entered is incorrect";
            emailInput.style.border = "2px solid red";
        }

        // Display appropriate error message
        if (hasError) {
            errorMessage.style.display = "block";
            errorMessage.textContent = errorText || "All fields are required!";
        } else {
            errorMessage.style.display = "none";
            form.submit(); // Submit form if all fields are valid
        }
    });

    // Reset border on user input
    [nameInput, emailInput, passwordInput].forEach(input => {
        input.addEventListener("input", function () {
            input.style.border = "2px solid #ccc"; // Reset border
        });
    });
});
