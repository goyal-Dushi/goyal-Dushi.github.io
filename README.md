## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contribution](#contribution)

## General info
This is a my personal portfolio website. <br/>
## **Please don't just fork the repo, do leave a star &#x272F;**


## Technologies
Project is created with:
* HTML5
* CSS3 and SASS
* Javascript
* Node with Express

	
## Setup
To run this project, install it locally using npm:
Copy and paste the following list of commands to get started after forking the project <br/>

`git clone https://github.com/goyal-Dushi/CV.git`

The above command will initialize a local remote **origin** by default and a branch named **main/master** <br/>
cd over to the dir where you have cloned the repo and checkout to the new branch in order to perform your changes <br />

`git checkout -b name-of-your-branch/change`

Then run the following code to install all the dependencies <br/>
`npm install` 

Since the project make use of sass, make sure you have the sass compiler installed
If not, install from the link below <br/>
https://sass-lang.com/install

After installing, run the sass compiler using the following command <br/> 
`sass --watch ./public/sass/index.scss:./public/css/index.css`

or cd over to the sass dir and then run the command <br/>
`sass --watch index.scss: ../css/index.css`

This will run the sass compiler for you so that the styles get loaded in the index.css file

Finally , run the project either throught live-server or using the following command <br/>
`nodemon app.js` : For automatic reload of the server on detecting changes 
or <br/>
`node app.js`

## Contribution
1) Fork the repo 
2) Clone it to your local file system
3) Make your changes and generate a pull request 
4) Please raise a issue first if working on any new feature
