const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getRole() {
    return "Employee";
  }
  getGithub() {
    return this.github;
  }
}
 module.exports = Engineer