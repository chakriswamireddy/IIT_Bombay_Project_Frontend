# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies
RUN /bin/sh
RUN npm install -g npm@latest
RUN npm i

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
# RUN npm run start

# Expose a port for serving the app
EXPOSE 3000

# Define the command to start the app
CMD [ "npm","run","start" ]
