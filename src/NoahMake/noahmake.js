const inquirer = require("inquirer");
const fs = require("fs");
const child_process = require("child_process");

const Starter = [
  {
    name: "name",
    type: "input",
    message: "Command name:",
    validate: function (input) {
      if (/^([a-z])+$/.test(input)) return true;
      else if (/^([A-Z])+$/.test(input)) return "Command name should be lowercase";
      else
        return "Please add a valid name";
    },
  },

  {
    name: "description",
    type: "input",
    message: "Command description:",

  },
  {
    name: "client",
    type: "input",
    message: "What is your client called:",
    default: 'client'
  },
];
const Dirr = process.cwd();

inquirer.prompt(Starter).then((answers) => {
  const Name = answers["name"];
  const Client = answers["client"];
  const Description = answers["description"]

  const packageJson = `
  module.exports = {
    name: '${Name}', //name of your command
    description: "${Description}",//description of what your command does
     run: async (${Client}, message, args) => {
        
    }
}
  `;


  fs.writeFile(`${Name}.js`, packageJson, function (err) {
    if (err) throw err
    const success = `
    Success! Created ${Name} at ${Dirr}/${Name}
  `;
    console.log(success);
  })

});
