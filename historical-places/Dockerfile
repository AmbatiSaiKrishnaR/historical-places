# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install `serve` to serve the static files
RUN npm install -g serve

# Serve the app
CMD ["serve", "-s", "build"]

# Expose the port that the app will run on
EXPOSE 5000
