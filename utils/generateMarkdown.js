// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return 'None';

  }
  return `![License Badge](https://img.shields.io/badge/license-${license.replaceAll(' ', '')}-blue)`;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `
## License

This project does not have a license.
`
  } else {
    return `
## License

This project was created using the ${license} license.
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.title}
## Description  
${data.description}
## Table of Contents  
  + [Installation](#installation)  
  + [Usage](#usage)  
  + [License](#license)  
  + [Contributing](#contributing)  
  + [Tests](#tests)  
  + [Questions](#questions)  
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.testing}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
