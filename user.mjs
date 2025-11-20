export class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getDetails() {
    return `${this.name} (${this.email}) - Age ${this.age}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

export default function createUser(name, email, age) {
  return new User(name, email, age);
}
