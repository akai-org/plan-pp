FROM node:14.18.1-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
# COPY ./ ./
RUN npm install
CMD ["npm", "start"]