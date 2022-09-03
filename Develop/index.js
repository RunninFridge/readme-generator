// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// Inquirer prompts for user responses/ first prompt is for the name.
inquirer 
.prompt([
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('I need the name of your title!');
            return false;
        }
    }
},
//second prompt is for the description.
{
    type: 'input',
    message: 'Add description of your project now.',
    name: 'descripton',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Please add a desctiption of your project!');
            return false;
        }
    }
},
//third prompt is for describing how to use this project.
{
    type: 'input',
    message: 'Describe how this project can be used.',
    name: 'use',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Please add a desctiption of use of your project!');
            return false;
        }
    }
},
//fourth is for how to install/run
{
    type: 'input',
    message: 'Describe how user can install and run this project',
    name: 'install/run',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Please add a desctiption of how to install and run this procject!');
            return false;
        }
    }
},
//fifth is for the username
{
    type: 'input',
    message: 'Wat is your GitHub username?',
    name: 'git/username',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Please add your username now!');
            return false;
        }
    }
},
//sixth is for the email
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Please add your email now!');
            return false;
        }
    }
},
//seventh is for the credits
{
    type: 'input',
    message: 'Add credits to your project.',
    name: 'credits',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('Are you sure there is no credits?');
            return true;
        }
    }
},
])
.then((data) => {
    const filename = `${'README'.toUpperCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});
// TODO: Create a function to initialize app

// Function call to initialize app
init()




