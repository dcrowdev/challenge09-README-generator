// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {   
        name: 'description',
        type: 'input',
        message: 'Give a brief description of your project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please enter installation instructions:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter usage information:'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter contribution guidelines:'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter test instructions:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a license:',
        choices: ['None', 'Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License']
    },
    {
        name: 'username',
        type: 'input',
        message: 'Please enter your Github Username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email:'
    }
]);

//TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => err ? console.error(err) : console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions).then((response) => {
        console.log('Generating README...');
        writeToFile('GeneratedREADME.md', generateMarkdown({...response}));
    });
 }

// Function call to initialize app
init();
