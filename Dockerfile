# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Specify the command to run when the container starts
CMD ["npm", "start"]

# Expose the port that the React application is running on
EXPOSE 3000

ENV API_HOST=localhost
