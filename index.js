// Packages needed for this to run
const inquirer = require("inquirer");
const fs = require("fs");
const { Z_FIXED } = require("zlib");
// Array of questions to that to ask from node
inquirer
  .prompt([
    {
      type: "input",
      message: "Application Name",
      name: "applicationName",
    },

    {
      type: "input",
      message: "Brief description of application",
      name: "description",
    },

    {
      type: "input",
      message: "Technologies Used",
      name: "technologies",
    },
    {
      type: "list",
      message: "License.",
      name: "license",
      choices: ["mit", "dnu", "isc", "apache", "none"],
    },
    {
      type: "input",
      message: "Instalation instructions",
      name: "instalationInsturctions",
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "list",
      message: "Any Testing",
      name: "tests",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      message: "Link to your github page.",
      name: "github",
    },
    {
      type: "input",
      message: "Link to your email.",
      name: "email",
    },
    {
      type: "input",
      message: "Link of the application",
      name: "html",
    },

    {
      type: "input",
      message: "What is the appicaton used for or usage.",
      name: "usage",
    },
  ])
  .then((response) => {
    const content = generateMDfile(response);
    fs.writeFile("README.md", content, (err) => {
      err ? console.log(err) : console.log("Sucess!!");
    });
  });

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Returns the license link
// If there is no license, return an empty string in the table of contents 
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`;
  }
  return "";
}

// Returns the license section of README
// If there is no license, return an empty string and does not appear
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License \n This application is licensed under the ${license} license`;
  }
  return "";
}

// function that writes a readme file
const generateMDfile = (response) => `<!DOCTYPE md>
# ${response.applicationName}
${renderLicenseBadge(response.license)}


## Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Instalation Instructions](#instalation-instructions)
* [Questions](#questions)
* [Link to Application](#link-to-application)
* [Contributing](#contributing)
* [Tests](#tests)
* [Usage](#usage)
${renderLicenseLink(response.license)}

## Description:
${response.description}


## Technologies:
${response.technologies}

## Instalation Instructions:
${response.instalationInsturctions}

## Questions:
link to github: ${response.github} \n
link to email: ${response.email}

## Link to application
link to ${response.applicationName} webpage: ${response.html}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Usage:

${response.usage}


${renderLicenseSection(response.license)}`;
