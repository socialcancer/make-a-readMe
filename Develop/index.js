// TODO: Include packages needed for this application
//
//including the packages needed to run the application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const genMark = require('./utils/generateMarkdown');
//this is the destination of where the files will be written to



// TODO: Create an array of questions for user input
//the destination for the user's questions
const questions = [

    {
        type: 'input',
        name: 'githubname',
        message: 'What is your GitHub username? (Required)',
        validate: githubnameInput => {
            if (githubnameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'useremail',
        message: 'What is a good email for you? (Required)',
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your repo? (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter your repo title!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter project description? (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter project description!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installDesc',
        message: 'What dependencies do you need to install for your application? (Required)',
        validate: installDescInput => {
            if (installDescInput) {
                return true;
            } else {
                console.log('Please enter the need for any dependencies?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your application be used? (Required)',
        validate: usageInfoInput => {
            if (usageInfoInput) {
                return true;
            } else {
                console.log('Please enter usage?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'What are the contribution guidelines? (Required)',
        validate: contribGuideInput => {
            if (contribGuideInput) {
                return true;
            } else {
                console.log('Please enter your contribution guidelines?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you test the app? (Required)',
        validate: testInstructInput => {
            if (testInstructInput) {
                return true;
            } else {
                console.log('Please enter a way to test your app?');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a type of license? (Check all that apply)',
        choices: ['GPL', 'MIT', 'LGPL', 'Apache License 2.0', 'BSD', 'None']
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //look at the current directory and create a file
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// // TODO: Create a function to initialize app
function init() {
    console.log(`
    =======================================
    Welcome to Create a professional README
    =======================================
     `);
    //this is calling my question array, which is holding my questions
    inquirer.prompt(questions)
        .then((response) => {

            //you are reference this file and passing in data
            writeToFile('README.md', genMark(response));

        });
}

// // Function call to initialize app
init(); 
