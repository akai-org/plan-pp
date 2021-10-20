FROM node:14.18.1-alpine
WORKDIR /app/frontend
COPY package.json /app/frontend
COPY package-lock.json /app/frontend
RUN npm install
RUN npm install react-scripts@4.0.3 -g 
EXPOSE 3000