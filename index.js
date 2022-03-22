const inquirer = require('inquirer');
const fs = require('fs');
const readGen = require('./readMeGen');

inquirer.prompt([
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input',
    },
    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input',
    },
    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input',
    },
    {
        name: 'description',
        message: 'Please provide a description of your project:',
        type: 'input',
    },
    {
        name: 'installation',
        message: 'Please provide any necessary installation instructions:',
        type: 'input',
    },
    {
        name: 'usage',
        message: 'Please provide any usage information for your project:',
        type: 'input',
    },
    {
        name: 'contribution',
        message: 'If applicable, please enter the GitHub username or anyone you collaborated with:',
        type: 'input',
    },
    {   
        name: 'testing',
        message: 'Please enter any testing instructions for your project:',
        type: 'input',
    },
    {
        name: 'licenses',
        message: 'Please Select Any Application Licenses:',
        type: 'list',
        choices: ['Apache', 'MIT', 'ISC', 'GNU', 'None'],
    },
])
.then(ans => fs.writeFile("READMEoutput.md", readGen(ans), ()=> "Completed"));


