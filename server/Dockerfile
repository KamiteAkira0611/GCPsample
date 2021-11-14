FROM node:16.10
ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN yarn cache clean
RUN yarn global add @nestjs/cli
RUN yarn install

RUN chmod 744 ./setup.sh
CMD [ "./setup.sh" ]
