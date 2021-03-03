const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const Choice = require("inquirer/lib/objects/choice");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];
const idArray = [];

function menu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "what is the team manager name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "please enter at least one character";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "please inter manager  id",
          validate: (answer) => {
            if (answer.match(/^[0-9]\d*$/)) {
              return true;
            }
            return "please enter a number";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "please enter manager email address",
          validate: (answer) => {
            if (answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
              return true;
            }
            return "please enter a valid email";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "please enter manager office number",
          validate: (answer) => {
            if (answer.match(/^[0-9]\d*$/)) {
              return true;
            }
            return "please enter a number";
          },
        },
        {
          type: "list",
          name: "choice",
          message: "do you want to add",
          choices: ["engineer", "intern", "finish building my team"],
        },
      ])
      .then((inquirerResponses) => {
        members.push(
          new Manager(
            inquirerResponses.managerId,
            inquirerResponses.managerName,
            inquirerResponses.managerEmail,
            inquirerResponses.officeNumber
          )
        );
        idArray.push(inquirerResponses.managerId);
        console.log(members);
        console.log(idArray);
        if (inquirerResponses.choice === "engineer") {
          createEngineer();
        } else if (inquirerResponses.choice === "intern") {
          createIntern();
        } else {
            createTeam()
          console.log("generating your readme");
        }
      });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "what is the engineer name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "please enter at least one character";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "please enter engineer id",
          validate: (answer) => {
            if (answer.match(/^[0-9]\d*$/)) {
              if (idArray.includes(answer)) {
                return "this id is already used";
              } else {
                return true;
              }
            }
            return "please enter a number";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "please enter engineer email address",
          validate: (answer) => {
            if (answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
              return true;
            }
            return "please enter a valid email";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "please enter engineer GitHub username",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "please enter a valid GitHub username";
          },
        },
        {
          type: "list",
          name: "choice",
          message: "do you want to add",
          choices: ["engineer", "intern", "finish building my team"],
        },
      ])
      .then((inquirerResponses) => {
        members.push(
          new Engineer(
            inquirerResponses.engineerId,
            inquirerResponses.engineerName,
            inquirerResponses.engineerEmail,
            inquirerResponses.engineerGithub
          )
        );
        idArray.push(inquirerResponses.engineerId);
        console.log(members);
        console.log(idArray);
        if (inquirerResponses.choice === "engineer") {
          createEngineer();
        } else if (inquirerResponses.choice === "intern") {
          createIntern();
        } else {
            createTeam()
          console.log("generating your readme");
        }
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "what is the intern name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "please enter at least one character";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "please enter intern id",
          validate: (answer) => {
            if (answer.match(/^[0-9]\d*$/)) {
              if (idArray.includes(answer)) {
                return "this id is already used";
              } else {
                return true;
              }
            }
            return "please enter a number";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "please enter intern email address",
          validate: (answer) => {
            if (answer.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
              return true;
            }
            return "please enter a valid email";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "please enter intern school name",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "please enter a valid school name";
          },
        },
        {
          type: "list",
          name: "choice",
          message: "do you want to add",
          choices: ["engineer", "intern", "finish building my team"],
        },
      ])
      .then((inquirerResponses) => {
        members.push(
          new Intern(
            inquirerResponses.internId,
            inquirerResponses.internName,
            inquirerResponses.internEmail,
            inquirerResponses.internSchool
          )
        );
        idArray.push(inquirerResponses.internId);
        console.log(members);
        console.log(idArray);
        if (inquirerResponses.choice === "engineer") {
          createEngineer();
        } else if (inquirerResponses.choice === "intern") {
          createIntern();
        } else {
          createTeam()
          console.log("generating your readme");
        }
      });
  }
  createManager();
}

menu();

const createTeam = () => {
    fs.mkdirSync(OUTPUT_DIR)
   fs.writeFileSync(outputPath, render(members))
}


