// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

const licenseChoices = [
    '1. GNU General Public License v3.0',
    '2. MIT License',
    '3. BSD 2-Clause "Simplified" License',
    '4. BSD 3-Clause "New" or "Revised" License',
    '5. Boost Software License 1.0',
    '6. Creative Commons Zero v1.0 Universal',
    '7. Eclipse Public License 2.0',
    '8. GNU Affero General Public License v3.0',
    '9. GNU General Public License v2.0',
    '10. GNU Lesser General Public License v2.1',
    '11. Mozilla Public License 2.0',
    '12. The Unlicense'
]

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Enter the title of your project: ',
        name: 'title'
    },
    {
        message: 'Enter the description: ',
        name: 'description'
    },
    {
        message: 'Enter the installation instructions: ',
        name: 'installation'
    },
    {
        message: 'Enter the usage information: ',
        name: 'usage'
    },
    {
        message: 'Enter any contribution guidelines: ',
        name: 'contribution'
    },
    {
        message: 'Enter any test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license: ',
        choices: licenseChoices,
        name: 'license'
    },
    {
        message: 'Enter your GitHub username: ',
        name: 'username'
    },
    {
        message: 'Enter your email: ',
        name: 'email'
    }
];

console.log('Welcome to Readme Generator! Please respond to the following prompts to generate a readme!');
console.log('-------------------------------------------------------------------------------------');
inquirer.prompt(questions).then((data) => {
    writeToFile('./generated-readmes/README.md', data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? console.error(err) : console.log('Readme successfully generated!');
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
