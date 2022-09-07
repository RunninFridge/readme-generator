// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// Inquirer prompts for user responses/ first prompt is for the name.
const questions = [
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
//2nd prompt is for the description.
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
//3rd prompt is for describing how to use this project.
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
//4th is for the license
{
    type: 'list',
    message: 'What is your license for this ?',
    name: 'license',
    choices: ['MIT', 'Apache_2.0', 'Eclipse', 'GNU', 'Unlicense'],
    validate: userInput => {
        if (userInput) {
            return true;
        }else{
            return 'Please add a license of use of your project!';
        }
    }
},
//5th is for how to install
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
//6th is for the username
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'git',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please add your username now!';
        }
    }
},
//7th is for the email
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
//8th is for the credits
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
//9th is for the test
{
    type: 'input',
    message: 'Add testing methods to your project.',
    name: 'test',
    validate: (userInput) => {
        if (userInput) {
            return true;
        }else{
            return 'Please input testing methods.';
        }
    }
},
];

const fileName = `README.md`;
function writeToFile (filename, data) {
  fs.writeFile(filename, generateMarkdown(data, null, '\t'), (err) => 
    err ? console.log(err) : console.log('Success!')
  );
};

function init() {
    //readmeGenPrompt(questions)
    inquirer.prompt(questions)
    .then((data) => {   
        writeToFile(fileName, data)
    })  
    .catch((err) => {
        console.log(err);
    });
};

init();