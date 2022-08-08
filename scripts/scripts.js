const emailInput = document.querySelector("#e-mail");
const emailIcon = document.querySelector("#input-icon");
const passwordInputs = document.querySelectorAll(".password-input");
const eyeIcons = document.querySelectorAll(".eye");


emailInput.addEventListener("focus", () => {
    emailIcon.style.display = "none";
})

emailInput.addEventListener("blur", () => {
    emailIcon.style.display = "block";
})

const eyeIconsArr = Array.from(eyeIcons);
for (let i = 0; i < eyeIconsArr.length; i++) {
    const eyeIcon = eyeIcons[i];
    eyeIcon.addEventListener("click", () => {

        const passwordInputsArr = Array.from(passwordInputs);
        const passwordInput = passwordInputsArr[i];
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordInput.style.marginRight = "-22px"
            eyeIcon.src = "../images/akar-icons_eye.svg"
            return;
        }
        passwordInput.type = "password";
        eyeIcon.src = "../images/eye-closed.png"
    })
}
