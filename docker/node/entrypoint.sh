#!/bin/bash

npm config set cache /home/node/app/.npm-cache --global

npm install 

nodemon -L