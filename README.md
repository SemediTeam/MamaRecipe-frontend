# Mama Recipe
<div align="center">
    <img width="250" src="./public/favicon.svg">
</div>

## Contents

- [Description](#description)
- [Screenshoots](#screenshoots)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [ENV](#ENV)
- [Usage](#Usage)
- [Demo Mama Recipe](#demo-mama-recipe)
- [Related Project](#related-project)

## Description

**Mama Recipe** is a web-like wikipedia but about foods. You can search recipe foods here, or add new recipe here.

## Screenshoots

<div align="center">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793682337497088020/unknown.png">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793683276937429052/unknown.png">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793687168656474132/unknown.png">
</div>

## Features

- Search Recipe
- Add recipe
- Edit Recipe
- Bookmarks Recipe
- Like Recipe
- Comment Recipe
- Edit Profile
- etc

### Requirements

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`ReactJs`](https://reactjs.org/)
- [`Mama REST API`](https://github.com/SemediTeam/recipedia-backend.git)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SemediTeam/recipedia-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   This will install the dependencies inside `node_modules`
   
### ENV

Please create and make the changes in the .env file.

```bash
REACT_APP_BASEURL = "http://host_backend:port_backend"
```

Example :

- http://host_backend:port_backend is http://localhost:4000

so, you can write in .env file like this :

```bash
REACT_APP_BASEURL = "http://localhost:4000"
```

### Usage

`node index` OR `nodemon start` OR `npm start`.

Runs the app in the development mode.<br>
Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

If you want to build, type `npm run build`.

## Demo Mama Recipe

This is Mama Recipe Web build version, let's try it.

<a href="http://mamarecipe.site:3000/">http://mamarecipe.site</a>

## Related Project

RESTful API for this web application, clone this for development Mama Recipe.

<a href="https://github.com/SemediTeam/recipedia-backend.git">REST API</a>
