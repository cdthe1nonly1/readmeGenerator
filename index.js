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
      message: "Brief description od application",
      name: "description",
    },

    {
      type: "input",
      message: "Technologies Used",
      name: "technologies",
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
    {
      type: "list",
      message: "Licences.",
      name: "licences",
      choices: ["mit", "dnu", "isc", "apache"],
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

## Links:

link to github: ${response.github}
link to ${response.applicationName} webpage: ${response.html}

## Images:

Image Link ${response.image}

## Usage:

${response.usage}

## Licences:

${response.licences}`;
