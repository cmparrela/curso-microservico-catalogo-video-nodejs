FROM node:15.14.0-alpine3.11

WORKDIR /home/node/app

COPY . .

RUN apk add --no-cache bash git fish

RUN npm install -g nodemon
RUN npm install -g @loopback/cli

RUN chmod +x ./docker/node/entrypoint.sh

USER node

EXPOSE 3001
ENTRYPOINT [ "docker/node/entrypoint.sh" ]