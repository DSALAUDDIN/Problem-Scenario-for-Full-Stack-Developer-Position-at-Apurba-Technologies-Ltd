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

- `index.js`: Main application file.
- `routes/`: Directory containing route definitions.
- `models/`: Directory containing Mongoose models.
- `test/`: Directory containing test files.

### Frontend

- `index.html`: Main HTML file.
- `app.js`: Main application file containing the AngularJS controller logic.
- `styles.css`: CSS file for styling.
- `karma.conf.js`: Configuration file for Karma test runner.

## API Endpoints

- `POST /posts`: Create a new post
- `PUT /posts/:id`: Update an existing post
- `DELETE /posts/:id`: Delete a post by ID
- `GET /posts`: Fetch all posts

## License
This project is licensed under the ISC License.