# Welcome to Noah King's pn_arcs 👋

------------------

## About

pn_arcs is nothing more then just a ez discord.js bot commands creator. It is creted to make my and my friends life easier 😂.


- Load Discord bot Templet
- Create a command file

------------------

## Installation

install the package globally 
```sh
$ npm i -g pn_arcs
$ p_arcs
$ nstart
```

------------------

## What each package does

- [pn_arcs] - Load a simple command handler Bot
- [nstart] - Create a command file

------------------
## pn_arcs

Start by opning your terminal and run `p_arcs`
```js
? Bot name: Arc
? Bot prefix: ? //you can go into your .env file and change it
? Your bot `TOKEN` please: My_Token //you can go into your .env file and change it
Installing dependencies...
```
Creates folder with command/event/handlers

>
------------------
## nstart

Start by `cd`into your command file and run `nstart`
```js
? Command name: noahdance
? Command description: Noah cant Dance
? What is your client called: Arc

    Success! Created noahdance at `C:\Prohacker\Github\Noah/`noahdance
```
Creates your command file 
```js

  module.exports = {
    name: 'noahdance', //name of your command
    description: "Noah cant Dance",//description of what your command does
     run: async (Arc, message, args) => {
        
    }
}
  
```
------------------

# For People using Replit

Replit doesn't allow you to install the package globally so you will need to require `pn_start` if you wish to create command files and the same with `pn_arcs` to load simple command handler bot.


```js
const {pn_start,pn_arcs,Log} = require('pn_arcs')

Log() //log does nothing more then just console.log("Im Ready")
//if you wish to create command file use pn_start 

pn_start()

```
!!Reminder to remove `pn_start ` from your `index.js` after you created your command file. You can require it again if you wish to create an another comamnd file
>

# For People using ``Vs Code`` as your platform 
>
### No need to use this Package
`JavaScript` has something call `User Snippets` where you can make it so it loades your command/code. Go to Manage/Settings > User Snippets > and JavaScript.

```js
{
// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
}
```
