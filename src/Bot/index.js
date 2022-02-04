const inquirer = require("inquirer");
const fs = require("fs");
const child_process = require("child_process");

const Starter = [
  {
    name: "Name",
    type: "input",
    message: "Bot name:",
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return "Please add a valid Bot Name";
    },
  },

  {
    name: "Prefix",
    type: "input",
    message: "Bot prefix:",
    default: '..'
  },
  {
    name: "TOKEN",
    type: "input",
    message: "Your bot `TOKEN` please:",
    default: 'TOKEN'
  },
];
const Dirr = process.cwd();

inquirer.prompt(Starter).then((answers) => {
  const projectChoice = "Arc";
  const Name = answers["Name"];
  const TOKEN = answers["TOKEN"]
  const Prefix = answers["Prefix"];
  const CopyFrom = `${__dirname}/DiscordjsBOT-Noah/${projectChoice}`;

  const packageJson = `
  {
    "name": "your-bot",
    "version": "1.0.0",
    "description": "A simple discordjs bot",
    "main": "index.js",
    "scripts": {
      "dev": "nodemon index.js"
    },
    "author": "",
    "license": "",
    "dependencies": {
      "chalk": "^4.1.0",
      "discord.js": "^12.5.1",
      "dotenv": "^8.2.0",
      "eslint": "^7.21.0",
      "nodemon": "^2.0.15",
      "glob": "^7.2.0",
      "inquirer": "^8.2.0"
      
    }
  }
  `;

  fs.mkdirSync(`${Dirr}/${Name}`);

  createDirectoryContents(CopyFrom, Name);
  const content = `TOKEN=${TOKEN}\nPrefix=${Prefix}`;
  const envPath = `${Dirr}/${Name}/.env`;
  fs.writeFileSync(envPath, content, "utf8");
  const packagePath = `${Dirr}/${Name}/package.json`;
  fs.writeFileSync(packagePath, packageJson, "utf8");
  console.log("Installing dependencies...");
  child_process.execSync(`cd ${Name} && npm i`, { stdio: 'inherit' });
  const success = `
    Success! Created ${Name} at ${Dirr}/${Name}
  `;
  console.log(success);
});

function createDirectoryContents(CopyFrom, Name) {
  const filesToCreate = fs.readdirSync(CopyFrom);
  filesToCreate.forEach((file) => {
    const origFilePath = `${CopyFrom}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      if (file === ".npmignore") file = ".gitignore";
      const writePath = `${Dirr}/${Name}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${Dirr}/${Name}/${file}`);
      // recursive call
      createDirectoryContents(
        `${CopyFrom}/${file}`,
        `${Name}/${file}`
      );
    }
  });
}