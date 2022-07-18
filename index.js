// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

const licenseChoices = [
    'A. GNU General Public License v3.0',
    'B. MIT License',
    'C. BSD 2-Clause "Simplified" License',
    'D. BSD 3-Clause "New" or "Revised" License',
    'E. Boost Software License 1.0',
    'F. Creative Commons Zero v1.0 Universal',
    'G. Eclipse Public License 2.0',
    'H. GNU Affero General Public License v3.0',
    'I. GNU General Public License v2.0',
    'J. GNU Lesser General Public License v2.1',
    'K. Mozilla Public License 2.0',
    'L. The Unlicense'
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
    const licenseChoice = data.license.substr(3); // Removing the label ("B. MIT License" becomes "MIT License")
    // licenseURL is used to obtain the badge for the license (split and join are used to remove spaces)
    const licenseURL = `https://img.shields.io/badge/license-${licenseChoice.split(' ').join('')}-green`; 
    const dataLiteral = 
`# ${data.title}
    
![License](${licenseURL})


## Description

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## Contributing

${data.contribution}


## License

${licenseChoice}  
For more information about this license, [click here](https://choosealicense.com/)


## Tests

${data.test}


## Questions

Have additional questions? Reach me here:  
Email: ${data.email}  
GitHub: [${data.username}](https://github.com/${data.username})`;
    fs.writeFile(fileName, dataLiteral, (err) => {
        err ? console.error(err) : console.log('Readme successfully generated!');
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
