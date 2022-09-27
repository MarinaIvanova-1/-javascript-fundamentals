class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users) {
    this.users = users
  }

  count() {
    console.log(this.users.length);
  }

  getNames() {
    this.users.forEach((user) => console.log(user.getName()));
  }

  getIntroductions() {
    this.users.forEach((user) => console.log(user.getIntroduction()))
  }
}
const userBase = new UserBase(users);
userBase.count();
userBase.getNames();
userBase.getIntroductions();
module.exports = User;
module.exports = UserBase;