
# Project Title : Template Engine - Employee Summary

 This is a software engineering team generator command line application. Use Node CLI to capture user input about employees and generate an HTML webpage that displays summaries for each person. Testing during development will be handled with Jest to reduce development time and ensure reliability. 


## Installation
install node.js, run npm init, run npm i.

I copied the project from the homework template folder. There is a package.json included so I use npm install to install the dependencies.

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/npm-install.jpg" width="500" title="NPM-Install">

## Project Overview
   Use node.js to build a software engineering team generator command line application. The app will need to have conditional checks to gather the appropriate information for each employee. 

In order to accomplish the project requirements I wanted to simplify the development by re-using code for the employee objects. Each employee type will also have a HTML template so I can keep the development seperated. 
The command line engine will leverage inquirer to generate the question prompts. based on what employee type is selected, the following prompts will be generated. This is challenging from a coding perspective since there are several ways to accomplish the task. 

The app will need to determine when the entire team has been entered so it can generate the final HTML webpage. This step will combine the input data, with the HTML templates to dynamically create the final result. 

Since the project is not hosted, I will include screenshots, and GIF style images to demonstrate the result.

## Psuedo Code

Build out your classes first! Manager, Engineer,and Intern classes should all extend from a class named Employee; 

Use inquirer to gather information about the development team members. 
Each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

Create objects for each team member (using the correct classes as blueprints)

After the user has input all employees desired, call the `render` function 
pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee.

Create an HTML file using the HTML returned from the `render` function.

Write it to a file named `team.html` in the `output` folder.

You can use the variable `outputPath` above target this location.

Check if the `output` folder exists and create it if it does not.

Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! 

## Technology
HTML
Bootstrap CSS Framework
Node JS
inquirer
path
jest

## Demonstration

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/team-app.jpg" width="500" title="team-app">

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/output.jpg" width="500" title="output">
