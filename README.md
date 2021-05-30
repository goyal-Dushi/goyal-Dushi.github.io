## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contribution](#contribution)

## General info
This is a my personal portfolio website. 

## Technologies
Project is created with:
* HTML5
* CSS3 and SASS
* Javascript
* Node with Express

	
## Setup
To run this project, install it locally using npm:
Copy and paste the following list of commands to get started after forking the project

$ git clone https://github.com/goyal-Dushi/CV.git

The above command will initialize a local remote origin by default and a branch named main/master

Checkout to the new branch in order to perform your changes
$ git checkout -b name-of-your-branch/change

Then cd over to the dir and write
$ npm install 

The above command will install all the dependencies for you

Since the project make use of sass, make sure you have the sass compiler installed
If not, install from the link below 
https://sass-lang.com/install

After installing, run the sass compiler using the following command 
$ sass --watch ./public/sass/index.scss:./public/css/index.css

or cd over to the sass dir and then run the command
$ sass --watch index.scss: ../css/index.css

This will run the sass compiler for you so that the styles get loaded in the index.css file

Finally , run the project either throught live-server or using the following command 
$ nodemon app.js
$ node app.js

## Contribution
1) Fork the repo 
2) Clone it to your local file system
3) Make your changes and generate a pull request 
4) Please raise a issue first if working on any new feature