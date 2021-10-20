FROM node:14.18.1-alpine
WORKDIR /app/frontend
ENV PATH="./node_modes/.bin:$PATH"
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]