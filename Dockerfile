FROM node:14-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm ci

RUN npm run build

COPY . /app

EXPOSE 5000

CMD ["node", "index.js"]  


  