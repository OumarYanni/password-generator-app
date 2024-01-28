const passwordInput = document.querySelector("#display-password");
const characterLengthInput = document.querySelector("#character-length-slider");

const sliderValueElement = document.querySelector("#slider-value");

const includeUppercaseCheckbox = document.querySelector(
  "#uppercase-letters-checkbox"
);
const includeLowercaseCheckbox = document.querySelector(
  "#lowercase-letters-checkbox"
);
const includeNumbersCheckbox = document.querySelector(
  "#numbers-letters-checkbox"
);
const includeSymbolsCheckbox = document.querySelector(
  "#symbols-letters-checkbox"
);

const generatePasswordButton = document.querySelector(
  ".generate-password-button"
);

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;':\",.<>/?";

async function passwordCopyHandling() {
  /*onclick="passwordCopyHandling()" */
  try {
    await navigator.clipboard.writeText(
      document.querySelector("#display-password").value
    );

    console.log("Texte copié dans le presse-papier !");

    return true;
  } catch (err) {
    console.error("Echec de la copie :", err);

    return false;
  }
}

function handleCopyButton() {
  const copyButton = document.querySelector(".material-symbols-outlined");
  copyButton.addEventListener("click", passwordCopyHandling);
}

/*async function handleCopyButtonClick() {
  const wasCopySuccessful = await passwordCopyHandling();
  if (wasCopySuccessful) {
    alert("Le mot de passe a été copié dans le presse-papier.");
  } else {
    alert("La copie a échoué. Veuillez réessayer.");
  }
}*/

function updateSliderValue() {
  const passwordLength = passwordInput.value.length;

  characterLengthInput.value = passwordLength;
  sliderValueElement.textContent = passwordLength;
}

function updateDisplay(elem, val) {
  return (elem.textContent = val);
}

function updateSliderDisplay() {
  /*oninput="updateSliderDisplay(this.value)" */

  updateDisplay(sliderValueElement, characterLengthInput.value);

  console.log("La longueur des caractères est :", characterLengthInput.value);
}

function handleSliderInput() {
  characterLengthInput.addEventListener("input", updateSliderDisplay);
}

function getPasswordStrength(password) {
  const length = password.length;

  if (length >= 15) {
    return "strong";
  } else if (length >= 10) {
    return "medium";
  } else if (length >= 6) {
    return "weak";
  } else {
    return "too-weak";
  }
}

function updateStrengthIndicator() {
  const password = document.querySelector("#display-password").value;
  const indicator = document.querySelector("#password-strength-indicator");
  const strengthText = document.querySelector(".password-strength-text");
  const strength = getPasswordStrength(password);

  indicator.className = "indicator";
  indicator.classList.add(strength);

  switch (strength) {
    case "too-weak":
      strengthText.textContent = "TOO WEAK!";
      break;

    case "weak":
      strengthText.textContent = "WEAK";
      break;

    case "medium":
      strengthText.textContent = "MEDIUM";
      break;

    case "strong":
      strengthText.textContent = "STRONG";
      break;
  }
}

// function handlePasswordInput() {
//   passwordInput.addEventListener("input", () => {
//     updateStrengthIndicator();
//     updateSliderValue();
//   });
// }

function generatePassword(
  length,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
) {
  let characters = "";
  if (hasUppercase) characters += uppercaseChars;
  if (hasLowercase) characters += lowercaseChars;
  if (hasNumbers) characters += numberChars;
  if (hasSymbols) characters += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

function handleGenerateButton() {
  generatePasswordButton.addEventListener("click", () => {
    const length = characterLengthInput.value;
    const hasUppercase = includeUppercaseCheckbox.checked;
    const hasLowercase = includeLowercaseCheckbox.checked;
    const hasNumbers = includeNumbersCheckbox.checked;
    const hasSymbols = includeSymbolsCheckbox.checked;

    const newPassword = generatePassword(
      length,
      hasUppercase,
      hasLowercase,
      hasNumbers,
      hasSymbols
    );

    passwordInput.value = newPassword;

    updateStrengthIndicator();
  });
}

function main() {
  handleSliderInput();
  handleCopyButton();
  //handlePasswordInput();
  handleGenerateButton();
}

main();
