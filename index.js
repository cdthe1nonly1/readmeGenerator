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
      message: "Licences.",
      name: "licences",
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
      message: "Link to your github page for this application.",
      name: "github",
    },
    {
      type: "input",
      message: "Link of the application",
      name: "html",
    },

    {
      type: "input",
      message: "Link to an image of the application",
      name: "image",
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

// function that writes a readme file
const generateMDfile = (response) => `<!DOCTYPE md>
# ${response.applicationName}

## Description:
${response.description}


## Technologies:
${response.technologies}

## Instalation Instructions:
${response.instalationInsturctions}

## Link to github:
link to github: ${response.github}

## Link to application
link to ${response.applicationName} webpage: ${response.html}


## Images:
Image Link ![Image Link](${response.image})

## Contributing
${response.contributing}

## Tests
${response.tests}

## Usage:

${response.usage}

## Licences:

${response.licences}`;
