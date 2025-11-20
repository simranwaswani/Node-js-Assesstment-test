import createUser, { User } from './user.mjs';
import { validateEmail, validateAge, validateName } from './validator.mjs';

function validateUser(user) {
  const nameValid = validateName(user.name);
  const emailValid = validateEmail(user.email);
  const ageValid = validateAge(user.age);

  console.log(`User: ${user.getDetails()}`);
  console.log(`Adult? ${user.isAdult() ? 'Yes' : 'No'}`);
  console.log(`Name valid: ${nameValid}`);
  console.log(`Email valid: ${emailValid}`);
  console.log(`Age valid: ${ageValid}`);
}

function run() {
  const users = [
    createUser('Simran', 'simran@gmail.com', 21),
    createUser('nancee', 'nancy@gmail.com', 22),
    createUser('nain', 'nain@gmail.com', 10),

  ];

  users.forEach(validateUser);
}

run();
