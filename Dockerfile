FROM node:16.9.1-alpine


WORKDIR "/app"

COPY ["./src", "/app/src"]
COPY ["./package.json", "/app/"]

VOLUME "/app/src"

RUN npm install --save

CMD ["node", "./src/index.js"]


