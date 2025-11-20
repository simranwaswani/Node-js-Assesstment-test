const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function validateAge(age) {
  return Number.isInteger(age) && age >= 0 && age <= 120;
}

export function validateName(name) {
  return typeof name === 'string' && name.trim().length > 0;
}
