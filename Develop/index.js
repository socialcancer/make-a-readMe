// TODO: Include packages needed for this application
//
//including the packages needed to run the application
const fs = require('fs');
const inquirer = require('inquirer');
//this is the destination of where the files will be written to
const { writeFile } = require('./utils/generateMarkdown');


const welcomeMessage = () => {
    console.log(`
=======================================
Welcome to Create a professional README
=======================================
`);
};
//invoking the welcome message
welcomeMessage();

//initial function for creating the initial questions
const promptUser = () => {
    return inquirer.prompt([
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
            name: 'repotitle',
            message: 'What is the name of your repo? (Required)',
            validate: repoTitleInput => {
                if (repoTitleInput) {
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
            name: 'usageInfo',
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
            name: 'contribGuide',
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
            name: 'testInstruct',
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
            name: 'typeOfLic',
            message: 'Choose a type of license? (Check all that apply)',
            choices: ['GPL', 'MIT', 'LGPL', 'Apache License 2.0', 'BSD']
        },

        //write
    ]).then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.githubname}/repos?per_page=50`;
        const shieldUrl = `https://img.shields.io/github/issues/${answers.githubname}/${answers.repotitle}`;
    })
};






//welcoming the using to the get to  know section
// const getToKnowMessage = () => {
//     console.log(`
// =================================
// Let's Enter Your Personal Details
// =================================
// `);
// };

// getToKnowMessage();

promptUser();


//creating the array of 'questions' if there is not one
// if (!questionData.questions) {
//     questionData.questions = [];
// } return inquirer.prompt([
//     {
//         type: 'checkbox',
//         name: 'typeOfLic',
//         message: 'Choose a type of license? (Check all that apply)',
//         choices: ['Public Domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
//     }
// ]);




// console.log('Hello there: confirming that node is running!');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init(); 
