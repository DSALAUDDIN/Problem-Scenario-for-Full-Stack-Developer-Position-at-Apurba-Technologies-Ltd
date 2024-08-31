# Use an official Node.js 14 image as the base image
FROM node:14

# Create a new directory /app
WORKDIR /app

# Copy package*.json files
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy application code
COPY . /app/

# Expose port 3011
EXPOSE 3011

# Run npm start when the container starts
CMD ["npm", "start"]