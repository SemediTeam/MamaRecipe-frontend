# Mama Recipe
<div align="center">
    <img width="250" src="./public/favicon.ico">
</div>

## Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements-for-development)
- [Installation](#installation-for-development)
- [Screenshoots](#screenshoots)
- [Demo Mama Recipe](#demo-mama-recipe)
- [Related Project](#related-project)

## Description

**Mama Recipe** is a web-like wikipedia but about foods. You can search recipe foods here, or add new recipe here.

## Features

- Search Recipe
- Add recipe
- Edit Recipe
- Bookmarks Recipe
- Like Recipe
- Comment Recipe
- Edit Profile
- etc

## Requirements for Development

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`ReactJs`](https://reactjs.org/)
- [`Mama REST API`](https://github.com/SemediTeam/recipedia-backend.git)

## Installation for Development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/SemediTeam/recipedia-frontend.git`
3. Open the folder and type `npm install` for install dependencies
4. Create file **_.env_** in root directory with the following contents :

```bash
REACT_APP_BASEURL = "http://host_backend:port_backend"
```

Example :

- http://host_backend:port_backend is http://localhost:4000

so, you can write in .env file like this :

```bash
REACT_APP_BASEURL = "http://localhost:8000"
```

5. Before run this, you must installation backend and then run backend
6. Type `npm start` in terminal for running this project.
7. If you want to build, type `npm run build`.

## Screenshoots

<div align="center">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793682337497088020/unknown.png">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793683276937429052/unknown.png">
    <img width="100%" src="https://cdn.discordapp.com/attachments/793137172181680148/793687168656474132/unknown.png">
</div>

## Demo Mama Recipe

This is Mama Recipe Web build version, let's try it.

<a href="http://mamarecipe.site:3000/">http://mamarecipe.site</a>

## Related Project

RESTful API for this web application, clone this for development Mama Recipe.

<a href="https://github.com/SemediTeam/recipedia-backend.git">REST API</a>
