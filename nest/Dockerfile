FROM node:16.10

WORKDIR /app
COPY . .

RUN yarn global add @nestjs/cli
RUN yarn install

CMD bash -c "yarn prisma migrate deploy && yarn start:dev"
