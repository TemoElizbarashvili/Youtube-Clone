const firebaseConfig = {
  apiKey: "AIzaSyB4WFrcrSDcqu3KDWf5CM67yTtI-3IxcEU",
  authDomain: "clone-6564f.firebaseapp.com",
  projectId: "clone-6564f",
  storageBucket: "clone-6564f.appspot.com",
  messagingSenderId: "233487178700",
  appId: "1:233487178700:web:0910eb97d56c1b04eedb69",
  measurementId: "G-ZMCLME6PQW"
};
const signUpEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;
const signInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4WFrcrSDcqu3KDWf5CM67yTtI-3IxcEU`;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


let SignInform = document.getElementById("authenticateForm");
let SignUpForm = document.getElementById("registration");

let title = document.getElementById("auth_title");
let signupButton = document.getElementById("register_button");
let signInButton = document.getElementById("sign_in_button");
signupButton.addEventListener("click", () => {
    title.textContent = "REGISTER";
    SignInform.classList.add("hidden");
    SignUpForm.classList.remove("hidden");
});
signInButton.addEventListener("click", () => {
    title.textContent = "LOGIN";
    SignInform.classList.remove("hidden");
    SignUpForm.classList.add("hidden");
});

let emailInput = document.getElementById("emailInput");
let emailValidation = document.getElementById("emailValidation");
let submitButton = document.getElementsByClassName("authenticate__form__button")[0];
let isMailValid = false;
submitButton.disabled = true;
emailInput.addEventListener('change', function() {
    const email =emailInput.value;
    if (emailPattern.test(email)) {
        isMailValid = true;
        submitButton.disabled = false;
        emailInput.style.border = " 0.2px solid #6D9886";
        emailValidation.classList.add('hidden');
    } else {
        emailInput.style.border = "0.2px solid red";
        isMailValid = false;
        submitButton.disabled = true;
        emailValidation.classList.remove('hidden');
    }
});

let registrationEmail = document.getElementById("register_emailInput");
let registrationPassword = document.getElementById("registration_password");
let registrationPasswordConfirm = document.getElementById("confirm_password");
let registerButton = document.getElementById("register_submit_button");
registerButton.disabled = true;
let isRegistrationMailValid = false;
let isPasswordsValid = false;

let emailValidationDiv = document.getElementById("registration_emailValidation");
let passwordValidationDiv = document.getElementById("registration_confirm_password");
registrationEmail.addEventListener("change", () => {
    const email = registrationEmail.value;
    if(emailPattern.test(email)){
        isRegistrationMailValid = true;
        isPasswordsValid ? registerButton.disabled = false : null;
        registrationEmail.style.border = " 0.2px solid #5cb85c";
        emailValidationDiv.classList.contains('hidden') ? null : emailValidationDiv.classList.add('hidden');
    } else {
        isRegistrationMailValid = false;
        registerButton.disabled = true;
        registrationEmail.style.border = " 0.2px solid red";
        emailValidationDiv.classList.contains('hidden') ? emailValidationDiv.classList.remove('hidden') : null;
    }
});

registrationPasswordConfirm.addEventListener("change", () => {
    if(registrationPassword.value === registrationPasswordConfirm.value && registrationPassword.value.length > 0) {
        isPasswordsValid = true;
        isRegistrationMailValid ? registerButton.disabled = false : null;
        registrationPassword.style.border = " 0.2px solid #5cb85c";
        registrationPasswordConfirm.style.border =  "0.2px solid #5cb85c";
        passwordValidationDiv.classList.contains("hidden") ? null :  passwordValidationDiv.classList.add("hidden");

    } else { 
        isPasswordsValid = false;
        registerButton.disabled = true;
        registrationPassword.style.border = " 0.2px solid red";
        registrationPasswordConfirm.style.border =  " 0.2px solid red";
        passwordValidationDiv.classList.contains("hidden") ? passwordValidationDiv.classList.remove("hidden") : null;
    }
});
registrationPassword.addEventListener("change", () => {
    if(registrationPassword.value === registrationPasswordConfirm.value && registrationPassword.value.length > 0) {
        isPasswordsValid = true;
        isRegistrationMailValid ? registerButton.disabled = false : null;
        registrationPassword.style.border = " 0.2px solid #5cb85c";
        registrationPasswordConfirm.style.border =  "0.2px solid #5cb85c";
        passwordValidationDiv.classList.contains("hidden") ? null :  passwordValidationDiv.classList.add("hidden");

    } else { 
        isPasswordsValid = false;
        registerButton.disabled = true;
        registrationPassword.style.border = " 0.2px solid red";
        registrationPasswordConfirm.style.border =  " 0.2px solid red";
        passwordValidationDiv.classList.contains("hidden") ? passwordValidationDiv.classList.remove("hidden") : null;
    }
});

let password = document.getElementById("password");

//TODO: replace this logic for registration button and inputs, now it is on LOGIN button and values
submitButton.addEventListener('click', function() {
    const data = {
        email: emailInput.value,
        password: password.value,
        returnSecureToken: true,
      };
    fetch(signInEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
            let pfp = document.getElementById("pfp");
            pfp.style.backgroundImage = 'url("../assets/images/green-pfp.jpg")';
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("pfp", 'url("../assets/images/green-pfp.jpg")');
            window.location.assign("../index.html");
        })
        .catch(error => {
          console.error("Login failed:", error);
        });
});

let registrationForm = document.getElementById("registration");

registerButton.addEventListener('click', () => {
    const data = {
        email: registrationEmail.value,
        password: registrationPassword.value,
        returnSecureToken: true,
      };
      console.log(data);
    fetch(signUpEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
            signInButton.click();
            console.log(data);
        })
        .catch(error => {
          console.error("Registration failed:", error);
        });
})

