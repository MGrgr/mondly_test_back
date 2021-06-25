FROM node:14-alpine
WORKDIR /app
COPY package.json /app
RUN npm install && apk update && apk upgrade && \
    apk add --no-cache mysql-client
COPY . /app
CMD [ "npm", "start" ]