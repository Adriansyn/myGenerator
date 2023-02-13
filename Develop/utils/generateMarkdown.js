// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ` [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return`## License
  
    ${license}`
  }
  else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `  ${renderLicenseBadge(answers.license)}
  
  ## Project Name: ${answers.projectName}

  ## Description
  ${answers.description}
  
  ## Getting Started
  
  ${answers.gettingStarted}
  
  ## Prerequisites
  
  ${answers.prerequisites}
  
  ## Usage
  
  ${answers.usage}
  
  
  ${renderLicenseSection(answers.license)}`;


}

module.exports = {generateMarkdown};
