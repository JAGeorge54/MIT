FROM node:slim

MAINTAINER jesse <jesse.george54@gmail.com>

WORKDIR /app

#copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install