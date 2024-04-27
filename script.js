const form = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    function validateEmail() {
        const email = emailInput.value.trim();
        if (email.length > 3 && email.includes("@") && email.includes(".")) {
            emailError.textContent = "";
            emailError.classList.remove("error");
            emailError.classList.add("success");
            emailError.textContent = "All good to go!";
        } else {
            emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
            emailError.classList.remove("success");
            emailError.classList.add("error");
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (password.length > 8) {
            passwordError.textContent = "";
            passwordError.classList.remove("error");
            passwordError.classList.add("success");
            passwordError.textContent = "All good to go!";
        } else {
            passwordError.textContent = "Make sure password is more than 8 characters.";
            passwordError.classList.remove("success");
            passwordError.classList.add("error");
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        if (emailError.textContent === "All good to go!" && passwordError.textContent === "All good to go!") {
            const confirmed = confirm("Are you want to sign up?");
            if (confirmed) {
                alert("Successful signup!");
                form.reset(); // Clear form inputs
            }
        } else {
            alert("Please correct the errors before submitting.");
        }
    });