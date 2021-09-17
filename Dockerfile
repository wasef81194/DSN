
FROM node:16.9.1-alpine


WORKDIR "/app"

COPY ["./src", "/app/src"]
COPY ["./package.json", "/app/"]
COPY ["./config", "/app/config"]

RUN npm install --save

CMD ["node", "./src/index.js"]