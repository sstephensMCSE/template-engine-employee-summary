// Main Class Employee
const Employee = require('./lib/employee');

// Dev Team Member Objects (extend from Employee)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Module Dependencies
const path = require("path");
const fs = require("fs");
const axios = require('axios');
const inquirer = require("inquirer");
const Jest = require('jest');


// Global Variable Declarations
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let orgChart = [];




// Team manager Inquirer questions.
const managerPrompt = [
    {
        type: "input",
        name: "name",
        message: "Enter manager name:",
        validate: async (input) => {
            if (input == "" || /\s/.test(input)) {
                return "Please enter first or last name.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
        validate: async (input) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    },
    {
        type: "input",
        name: "officeNum",
        message: "Enter office number:",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter a number";
            }
            return true;
        }
    }
]

// Team member inquirer prompts.

const memberPrompt = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name:",
        validate: async (input) => {
            if (input == "") {
                return "Please enter a name.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter their email:",
        validate: async (input) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices: ["engineer", "intern"]
    },
    {
        when: input => {
            return input.role == "engineer"
        },
        type: "input",
        name: "github",
        message: "Engineer, enter your github username:",
        validate: async (input) => {
            if (input == "" || /\s/.test(input)) {
                return "Please enter a valid GitHub username";
            }
            return true;
        }
    },
    {
        when: input => {
            return input.role == "intern"
        },
        type: "input",
        name: "school",
        message: "Intern, enter your school name:",
        validate: async (input) => {
            if (input == "") {
                return "Please enter a name.";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "addAnother",
        message: "Add another team member?",
        choices: ["Yes", "No"]
    }
]

function init() {
    // prompt the user for information about the team manager
    inquire.prompt(managerPrompt).then(managerInfo => {
        let teamManager = new Manager(managerInfo.name, 1, managerInfo.email, managerInfo.officeNum);
        teamList.push(teamManager);
        console.log("Created team manager");
        
        // User can input any number of team members, and they may be a mix of engineers and interns.



        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!



        // After you have your html, you're now ready to create an HTML file using the HTML
        // returned from the `render` function. Now write it to a file named `team.html` in the
        // `output` folder. You can use the variable `outputPath` above target this location.
        // Hint: you may need to check if the `output` folder exists and create it if it
        // does not.
        
    })
}

init();
