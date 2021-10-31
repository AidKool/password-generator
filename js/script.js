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

function generatePassword() {
  const pwLength = getPasswordLength();
  const characters = getCharacters();
  const validCharacters = validateCharacters(
    characters.lowercase,
    characters.uppercase,
    characters.numbers,
    characters.specialCharacters
  );
  if (!validCharacters) {
    alert('At least one character type must be selected.\nExiting application.');
    return;
  }
  let password = createPassword(pwLength, characters);
  return password;
}

function createPassword(pwLength, charsToUse) {
  let password = '';
  let characters = '';
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  if (charsToUse.lowercase) {
    characters = characters.concat(letters);
  }
  if (charsToUse.uppercase) {
    characters = characters.concat(letters.toUpperCase());
  }
  if (charsToUse.numbers) {
    characters = characters.concat(numbers);
  }
  if (charsToUse.specialCharacters) {
    characters = characters.concat(special);
  }
  for (let i = 0; i < pwLength; i++) {
    let random = Math.floor(Math.random() * characters.length);
    password = password.concat(characters.charAt(random));
  }
  return password;
}

function getPasswordLength() {
  const minLength = 8;
  const maxLength = 128;
  let length = 0;
  while (!(length >= minLength && length <= maxLength)) {
    length = prompt(
      `Enter password length.\nPasswords must be between ${minLength} and ${maxLength} characters long.`,
      20
    );
  }
  return length;
}

function validateCharacters(lowercase, uppercase, numbers, specialCharacters) {
  return lowercase || uppercase || numbers || specialCharacters;
}

function getCharacters() {
  let lowercase = useLowercase();
  let uppercase = useUppercase();
  let numbers = useNumbers();
  let specialCharacters = useSpecialCharacters();
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    specialCharacters: specialCharacters,
  };
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
