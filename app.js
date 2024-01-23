const characterLengthInput = document.querySelector("#character-length-slider");

const sliderValueElement = document.querySelector("#slider-value");

async function passwordCopyHandling() {
  try {
    await navigator.clipboard.writeText(
      document.querySelector("#display-password").value
    );

    console.log("Texte copié dans le presse-papier !");

    //return true;
  } catch (err) {
    console.error("Echec de la copie :", err);

    //return false;
  }
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
  updateDisplay(sliderValueElement, characterLengthInput.value);

  console.log("La longueur des caractères est :", characterLengthInput.value);
}

function updateStrengthIndicator() {
  const password = document.querySelector("#display-password").value;
  const indicator = document.querySelector("#password-strength-indicator");
  const strength = getPasswordStrength(password);

  indicator.className = "indicator";

  indicator.classList.add(strength);

  //   if (strength === "too-weak") {
  //     indicator.classList.add("too-weak");
  //   } else if (strength === "weak") {
  //     indicator.classList.add("weak");
  //   } else if (strength === "medium") {
  //     indicator.classList.add("medium");
  //   } else if (strength === "strong") {
  //     indicator.classList.add("strong");
  //   }
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
