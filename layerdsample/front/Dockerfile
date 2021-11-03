FROM node:16.10
ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN yarn install
COPY . ./

CMD yarn start
