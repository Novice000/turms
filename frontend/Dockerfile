FROM node:22

WORKDIR /client

COPY package.json package-lock.json /client/

RUN npm install

COPY . /client/

EXPOSE 3000

# Start the application
CMD ["npm", "start"]
