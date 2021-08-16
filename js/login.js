// targeting the elements
const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("password-input")
const loginButton = document.getElementById("login-btn")

// button event
loginButton.addEventListener("click", function () {
    if (emailInput.value === "shovon@bank.com" && passwordInput.value === "mybank") {
        window.location.href = "banking.html"
    } else {
        alert("Wrong Email or Password")
    }
})