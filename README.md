## Overview
This project is a full-stack application built using AngularJS for the frontend and Node.js with Express for the backend. It provides a RESTful API for managing blog posts and a frontend interface for users to interact with the blog.

## Features
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- View all blog posts

## Technologies Used
- JavaScript
- AngularJS (manually integrated, not using Angular CLI)
- Node.js
- Express
- MongoDB
- Mongoose
- Karma (for testing)
- Jasmine (for testing)
- Mocha (for testing)
- Chai (for testing)
- Supertest (for testing)

## Prerequisites
- Node.js (version 14 for backend, version 20 for frontend)
- npm (Node Package Manager)
- Docker
- Docker Compose

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/DSALAUDDIN/Problem-Scenario-for-Full-Stack-Developer-Position-at-Apurba-Technologies-Ltd.git
    cd problem-scenario-for-full-stack-developer-position-at-apurba-technologies-ltd
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node app.cjs
    ```

4. Open your browser and navigate to `http://localhost:3011`.

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd apurba-blog-app
    ```

2. Open `index.html` in your browser.

## Docker Instructions

### Backend

1. Build the Docker image:
    ```bash
    docker build -t my-backend-image -f backend/backend.dockerfile .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3011:3011 my-backend-image
    ```

### Frontend

1. Build the Docker image:
    ```bash
    docker build -t my-frontend-image -f frontend/frontend.dockerfile .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3009:3009 my-frontend-image
    ```

## Running Tests

### Backend

1. To run the tests, use the following command:
    ```bash
    npm test
    ```

### Frontend

1. To run the frontend tests, use Karma:
    ```bash
    karma start
    ```

## Project Structure

### Backend

- `app.cjs`: Main application file.
- `test/`: Directory containing test files.

### Frontend

- `index.html`: Main HTML file.
- `app.js`: Main application file containing the AngularJS controller logic.
- `styles.css`: CSS file for styling.
- `karma.conf.js`: Configuration file for Karma test runner.

## API Endpoints

### GET /posts
- **Method**: GET
- **URL**: `http://localhost:3011/posts`
- **Description**: Fetch all posts.

### GET /posts/:id
- **Method**: GET
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Description**: Fetch a specific post by ID. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

### POST /posts
- **Method**: POST
- **URL**: `http://localhost:3011/posts`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Sample Post",
      "content": "This is a sample post content.",
      "author": "John Doe"
    }
    ```
- **Description**: Create a new post.

### PUT /posts/:id
- **Method**: PUT
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Updated Post",
      "content": "This is the updated content.",
      "author": "Jane Doe"
    }
    ```
- **Description**: Update an existing post. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

### DELETE /posts/:id
- **Method**: DELETE
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Description**: Delete a post by ID. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

## Testing with Postman

To test the API endpoints in Postman, you can use the following examples:

### GET /posts
- **Method**: GET
- **URL**: `http://localhost:3011/posts`
- **Description**: Fetch all posts.

### GET /posts/:id
- **Method**: GET
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Description**: Fetch a specific post by ID. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

### POST /posts
- **Method**: POST
- **URL**: `http://localhost:3011/posts`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Sample Post",
      "content": "This is a sample post content.",
      "author": "John Doe"
    }
    ```
- **Description**: Create a new post.

### PUT /posts/:id
- **Method**: PUT
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Updated Post",
      "content": "This is the updated content.",
      "author": "Jane Doe"
    }
    ```
- **Description**: Update an existing post. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

### DELETE /posts/:id
- **Method**: DELETE
- **URL**: `http://localhost:3011/posts/66d43cf55aefd392083e35d6`
- **Description**: Delete a post by ID. Replace `66d43cf55aefd392083e35d6` with the desired post ID.

## License
This project is licensed under the ISC License.

## Containerization Steps

### Steps to Containerize the Application Using Docker

1. **Create a Dockerfile for the Backend:**
    - Define the base image.
    - Set the working directory.
    - Copy the `package.json` and `package-lock.json` files.
    - Install dependencies.
    - Copy the rest of the application code.
    - Expose the necessary port.
    - Define the command to run the application.

2. **Create a Dockerfile for the Frontend:**
    - Define the base image.
    - Set the working directory.
    - Copy the frontend code.
    - Expose the necessary port.
    - Define the command to serve the frontend.

3. **Create a `docker-compose.yml` File:**
    - Define services for both the backend and frontend.
    - Set up network configuration.
    - Define volume mappings if necessary.
    - Specify environment variables.

### Backend Dockerfile (`backend/backend.dockerfile`)

```dockerfile
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
```

### Frontend Dockerfile (`frontend/frontend.dockerfile`)

```dockerfile
# Use the official Node.js 20 LTS image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 3009

# Define the command to run the application
CMD ["npm", "start"]
```

### Docker Compose File (`docker-compose.yml`)

```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: backend.dockerfile
    ports:
      - "3011:3011"
    volumes:
      - ./backend:/app
    command: ["npm", "start"]

  frontend:
    build:
      context: ./apurba-blog-app
      dockerfile: frontend.dockerfile
    ports:
      - "3009:3009"
    volumes:
      - ./apurba-blog-app:/app
    command: ["npx", "http-server", "-p", "3009"]

  mongo:
    image: mongo:4.4
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Running the Application in Docker

1. Clone the repository:
    ```bash
    git clone https://github.com/DSALAUDDIN/Problem-Scenario-for-Full-Stack-Developer-Position-at-Apurba-Technologies-Ltd.git
    cd problem-scenario-for-full-stack-developer-position-at-apurba-technologies-ltd
    ```

2. Build and start the Docker containers:
    ```bash
    docker-compose up --build
    ```

3. Open your browser and navigate to:
    - Backend: `http://localhost:3011`
    - Frontend: `http://localhost:3009`