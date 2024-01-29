const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;':\",.<>/?";


function getPasswordStrength(password: string): string {
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


function generatePassword(
  length: number,
  hasUppercase: boolean,
  hasLowercase: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean
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

export {
    getPasswordStrength,
    generatePassword
}
