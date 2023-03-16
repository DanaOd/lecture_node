console.log('inside the file');

const validator = require("validator");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log('changes in first branch');