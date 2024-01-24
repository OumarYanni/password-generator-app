const characterLengthInput = document.querySelector("#character-length-slider");

const sliderValueElement = document.querySelector("#slider-value");

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

function handlePasswordInput() {
  const passwordInput = document.querySelector("#display-password");

  passwordInput.addEventListener("input", updateStrengthIndicator);
}

function main() {
  handleSliderInput();
  handleCopyButton();
  handlePasswordInput();
}

main();
