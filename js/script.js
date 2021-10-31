// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  // check that a valid password was generated
  if (password !== undefined) {
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  const length = getPasswordLength();

  // stop if the user cancels the process
  if (length == null) {
    return;
  }

  const characters = getCharactersFromUser();
  const validCharacters = validateCharacters(
    characters.lowercase,
    characters.uppercase,
    characters.numbers,
    characters.specialCharacters
  );

  // stop if no character type is selected
  if (!validCharacters) {
    alert('At least one character type must be selected.\nExiting application.');
    return;
  }

  return createPassword(length, characters);
}

function createPassword(length, charsToUse) {
  let password = '';
  let characters = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  // add the characters the user chooses to the pool of possible characters
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

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * characters.length);
    password = password.concat(characters.charAt(random));
  }

  return password;
}

function getPasswordLength() {
  const minLength = 8;
  const maxLength = 128;
  let length = 0;
  while (!(length >= minLength && length <= maxLength) && length !== null) {
    // null lets the user cancel
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

function getCharactersFromUser() {
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
