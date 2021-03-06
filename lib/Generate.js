const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
//const Employee = require("./Employee.js");

function Generate() {
  this.manager;
  this.engineer = [];
  this.intern = [];
}
// prompt user to create a manager for team
Generate.prototype.promptManager = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "please enter the manager's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`please enter a name!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the Employee ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter an ID#!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter an email!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number:",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the office number!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      this.manager = new Manager(name, id, email, officeNumber);
      this.initMainMenu();
    });
};
// prompt user with adding memebers to the team
Generate.prototype.initMainMenu = function () {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please proceed in adding interns or Engineers to the team",
        choices: ["Add Engineer", "Add Intern", "Generate my page!"],
      },
    ])
    .then(({ menu }) => {
      if (menu === "Add Engineer") {
        this.promptEngineer();
      }
      if (menu === "Add Intern") {
        this.promptIntern();
      }
      if (menu === "Generate my page!") {
        console.log(this.manager);
        console.log(this.engineer);
        console.log(this.intern);
        this.generateHTML();
      }
    });
};
// prompt user with adding an engineer to the team
Generate.prototype.promptEngineer = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter a name!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter an ID#!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter an email!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "GitHub Username:",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, github }) => {
      this.engineer.push(new Engineer(name, id, email, github));
      this.initMainMenu();
    });
};
// prompt user with adding an intern to the team
Generate.prototype.promptIntern = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter a name!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter an ID#!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter an email!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Name of School:",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter a school name!");
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, school }) => {
      this.intern.push(new Intern(name, id, email, school));
      this.initMainMenu();
    });
};
// this portion of code will take the user input and generate an html page with all the relevant information
Generate.prototype.generateHTML = function () {
  fs.writeFile(
    "./dist/index.html",
    `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Team Profile Chart</title>
              <link rel="stylesheet" href="style.css">
          </head>
          <body>
              <h1>My Team Information</h1>
              <main>
              ${this.generateManager()}
              ${this.generateEngineer()}
              ${this.generateIntern()}
              </main>
          </body>
          </html>
          `,
    "utf8",
    (err) => {
      if (err) {
        throw err;
      }
      console.log("File created!");
    }
  );
};

Generate.prototype.generateManager = function () {
  return `
      <div class="card">
          <h2>${this.manager.getName()}</h2>
          <h3>${this.manager.getRole()}</h3>
          <p>ID: ${this.manager.getId()}</p>
          <p>Email: <a class="link" target = _blank href="mailto:${this.manager.getEmail()}">${this.manager.getEmail()}</a></p>
          <p>Office Number: ${this.manager.getOfficeNumber()}</p>
      </div>
      `;
};

Generate.prototype.generateEngineer = function () {
  return `
          ${this.engineer.map((eng) => {
            return `
                  <div class="card">
                      <h2>${eng.getName()}</h2>
                      <h3>${eng.getRole()}</h3>
                      <p>ID: ${eng.getId()}</p>
                      <p>Email: <a class="link" target = _blank href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></p>
                      <p>GitHub: <a class="link" target = _blank href="https://github.com/${eng.getGithub()}">${eng.getGithub()}</a></p>
                  </div>
              `;
          })}
      `;
};

Generate.prototype.generateIntern = function () {
  return `
          ${this.intern.map((int) => {
            return `
                  <div class="card">
                      <h2>${int.getName()}</h2>
                      <h3>${int.getRole()}</h3>
                      <p>ID: ${int.getId()}</p>
                      <p>Email: <a class="link" target = _blank href="mailto:${int.getEmail()}">${int.getEmail()}</a></p>
                      <p>School: ">${int.getSchool()}</p>
                  </div>
              `;
          })}
      `;
};

module.exports = Generate;
