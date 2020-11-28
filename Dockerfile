FROM node:15

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "yarn", "start" ]