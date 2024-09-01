# Problem-Scenario-for-Full-Stack-Developer-Position-at-Apurba-Technologies-Ltd

## Overview
This project is a full-stack application built using AngularJS for the frontend and Node.js with Express for the backend. It provides a RESTful API for managing blog posts and a frontend interface for users to interact with the blog.

## Features
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- View all blog posts

## Technologies Used
- JavaScript
- AngularJS
- Node.js
- Express
- MongoDB
- Mongoose
- Karma (for testing)
- Jasmine (for testing)
- Mocha (for testing)
- Chai (for testing)
- Supertest (for testing)

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
    docker run -p 80:80 my-frontend-image
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
- **URL**: `http://localhost:3011/posts/1`
- **Description**: Fetch a specific post by ID. Replace `1` with the desired post ID.

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
- **URL**: `http://localhost:3011/posts/1`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Updated Post",
      "content": "This is the updated content.",
      "author": "Jane Doe"
    }
    ```
- **Description**: Update an existing post. Replace `1` with the desired post ID.

### DELETE /posts/:id
- **Method**: DELETE
- **URL**: `http://localhost:3011/posts/1`
- **Description**: Delete a post by ID. Replace `1` with the desired post ID.

## Testing with Postman

To test the API endpoints in Postman, you can use the following examples:

### GET /posts
- **Method**: GET
- **URL**: `http://localhost:3011/posts`
- **Description**: Fetch all posts.

### GET /posts/:id
- **Method**: GET
- **URL**: `http://localhost:3011/posts/1`
- **Description**: Fetch a specific post by ID. Replace `1` with the desired post ID.

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
- **URL**: `http://localhost:3011/posts/1`
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
    ```json
    {
      "title": "Updated Post",
      "content": "This is the updated content.",
      "author": "Jane Doe"
    }
    ```
- **Description**: Update an existing post. Replace `1` with the desired post ID.

### DELETE /posts/:id
- **Method**: DELETE
- **URL**: `http://localhost:3011/posts/1`
- **Description**: Delete a post by ID. Replace `1` with the desired post ID.

## License
This project is licensed under the ISC License.