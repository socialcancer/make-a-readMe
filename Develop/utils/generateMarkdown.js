// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

${renderLicenseBadge(data.license)}

# Description

${data.desc}

# Table of Contents

* [Installation](#installation)
* [Usage](#usage)  
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation

${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

---

# Usage

${data.usage}

# Contributing

${data.contrib}

# Tests

${data.test}


# Questions
If you have any additional questions or concerns, I can be reached at danielchristopherallen@gmail.com 

`;
}


module.exports = generateMarkdown;