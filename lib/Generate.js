const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");

function Generate() {
  this.manager;
  this.engineer = [];
  this.intern = [];
}

Generate.prototype.promptManager = function () {
  return prompt([
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
          console.log(`Please enter an ID!`);
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
  ]).then(({ name, id, email, officeNumber }) => {
    this.manager = new Manager(name, id, email, officeNumber);
    this.initMainMenu();
  });
};
