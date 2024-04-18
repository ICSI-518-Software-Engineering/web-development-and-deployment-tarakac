FROM node:20


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 5173

# Run the server
CMD ["node", "index.js"]