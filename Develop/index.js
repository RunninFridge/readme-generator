// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const util = require('util')



// TODO: Create an array of questions for user input
// Inquirer prompts for user responses/ first prompt is for the name.
inquirer 
.prompt([
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'I need the name of your title!';
        }
    }
},
//second prompt is for the description.
{
    type: 'input',
    message: 'Add description of your project now.',
    name: 'descripton',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please add a desctiption of your project!';
        }
    }
},
//third prompt is for describing how to use this project.
{
    type: 'input',
    message: 'Describe how this project can be used.',
    name: 'use',
    validate: userInput => {
        if (userInput) {
            return true;
        }else{
            return 'Please add a desctiption of use of your project!';
        }
    }
},
//fourth is for how to install/run
{
    type: 'input',
    message: 'Describe how user can install and run this project',
    name: 'install',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please add a desctiption of how to install and run this procject!';
        }
    }
},
//fifth is for the username
{
    type: 'input',
    message: 'Wat is your GitHub username?',
    name: 'git',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please add your username now!';
        }
    }
},
//sixth is for the email
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: userInput => {
        if (userInput) {
            return true;
        }else{
            return 'Please add your email now!';
        }
    }
},
//seventh is for the credits
{
    type: 'input',
    message: 'Add credits to your project.',
    name: 'credits',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Are you sure there is no credits?';
        }
    }
},
//8th is for the test
{
    type: 'input',
    message: 'Add credits to your project.',
    name: 'test',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please input testing methods.';
        }
    }
},
])
.then((data) => {
  const filename = `${'README'.toUpperCase().split(' ').join('')}.md`;

  fs.writeFile(filename, generateMarkdown, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});
// TODO: Create a function to initialize app

// Function call to initialize app
//init();
