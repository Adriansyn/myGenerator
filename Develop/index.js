// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs= require('fs')
const { renderLicenseBadge, generateMarkdown } = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'gettingStarted',
      message: 'How do users get started with your project?'
    },
    {
      type: 'input',
      name: 'prerequisites',
      message: 'What prerequisites do users need to install to run your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions on how to use your project:'
    },
    {
      type: 'list',
      name: 'license',
      choices: ["Apache_2.0", "Boost_1.0", "BSD_3", "MIT",'none'],
      message: 'What license is your project under?'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README generated successfully!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readme = generateMarkdown(answers)
      writeToFile('README.md',readme)
    })
}

// Function call to initialize app
init();
