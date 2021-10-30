// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function getPasswordLength() {
  const minLength = 8;
  const maxLength = 128;
  let length = 0;
  while (!(length >= minLength && length <= maxLength)) {
    length = prompt('Enter password length.\nPasswords must be between 8 and 128 characters long.', 20);
  }
  return length;
}

function useLowercase() {
  return confirm('Do you want to use lowercase letters?');
}

function useUppercase() {
  return confirm('Do you want to use uppercase letters?');
}

function useNumbers() {
  return confirm('Do you want to use numbers?');
}

function useSpecialCharacters() {
  return confirm('Do you want to use special characters?');
}
