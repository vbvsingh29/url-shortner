FROM node:18-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN cd /tmp $$ npm install -q

RUN npm dedupe

ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run-script build

RUN npm install pm2 -g

EXPOSE 4000

CMD [ "pm2-runtime" , "process.json" ]