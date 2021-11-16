FROM node:14.18.1-alpine
COPY package.json /data/
COPY package-lock.json /data/
WORKDIR /data/
RUN npm install
ENV PATH /data/node_modules/.bin:$PATH
COPY . /data/app/frontend/
WORKDIR /data/app/frontend/
EXPOSE 3000
