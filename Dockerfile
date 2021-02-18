# build environment
FROM node:12-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
RUN npm run build

FROM node:12
ENV NODE_ENV production

COPY --from=build /app/build /opt/app/build/
COPY --from=build /app/dist /opt/app/dist/
COPY --from=build ["app/package.json", "app/package-lock.json*", "app/database.sql", "app/newrelic.js", "opt/app/"]
WORKDIR /opt/app
RUN npm install --production

CMD npm start