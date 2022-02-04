# Welcome to Noah King's pn_arcs 👋

------------------

## About

pn_arc is nothing more then just a ez discord.js bot commands creator. It is creted to make my and my friends life easier 😂

- Load Discord bot Templet
- Create a command file

------------------

## Installation

```sh
$ npm i -g pn_arcs
$ p_arcs
$ nstart
```

------------------

## What each packag does

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
