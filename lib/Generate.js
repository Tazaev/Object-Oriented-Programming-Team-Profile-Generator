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
