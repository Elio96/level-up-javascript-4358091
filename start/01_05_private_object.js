const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "ciccio",
  [password]: "123123",
  age: 27
};

console.log(user.username);
console.log(user.password);