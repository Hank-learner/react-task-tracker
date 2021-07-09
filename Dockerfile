FROM node:14-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm ci

RUN pwd

COPY . /app

RUN npm run build

EXPOSE 5000

CMD ["node", "index.js"]  


  