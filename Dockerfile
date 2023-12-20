FROM node:slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./server ./server 

EXPOSE 5000

CMD [ "npm", "start" ]