FROM node:16.9.1-alpine

WORKDIR /app

COPY ["./src","/app/src"]
COPY ["./config","/app/config"]
COPY ["./package.json","/app/"]

RUN npm install --save

CMD ["node","src/index.js"]