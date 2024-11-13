---

User API

A RESTful API built with Node.js, Express, and MongoDB for managing users. This API allows for creating, reading, updating, and deleting (CRUD) user records, with validation on inputs to ensure data integrity.

Key Files

config/db.js: Sets up the MongoDB connection.

controllers/userController.js: Contains the main logic for CRUD operations.

models/User.js: Defines the User schema and validation rules.

routes/userRoutes.js: Defines routes for user-related operations.

index.js: Entry point to initialize Express, connect to MongoDB, and set up routes.


Prerequisites

Node.js (v12+)

MongoDB (either a local instance or MongoDB Atlas)

Postman or any API client to test the endpoints (optional)


Setup and Installation

1. Clone the repository:

git clone <your-repo-url>
cd user-api


2. Install dependencies:

npm install


3. Environment Variables: Create a .env file in the root of the project to store environment variables:

MONGODB_URI=mongodb://localhost:27017/users
PORT=3000


4. Run the Server: Start the server using the following command:

npm start

The API will be running on http://localhost:3000 (or the port specified in .env).



API Documentation

Endpoints

Request and Response Examples

1. Create User

Request:

POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}

Response:

Success (201 Created):

{
  "_id": "unique-id",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}

Error (400 Bad Request or 409 Conflict):

Validation error or duplicate email.





2. Get All Users

Request:

GET /api/users

Response:

[
  {
    "_id": "unique-id",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25
  },
  ...
]



3. Get User by ID

Request:

GET /api/users/:id

Response:

Success (200 OK):

{
  "_id": "unique-id",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 25
}

Error (404 Not Found):

User not found.





4. Update User

Request:

PUT /api/users/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "age": 26
}

Response:

Success (200 OK):

{
  "_id": "unique-id",
  "name": "Jane Doe",
  "email": "johndoe@example.com",
  "age": 26
}

Error (400 Bad Request or 404 Not Found):

Validation error or user not found.





5. Delete User

Request:

DELETE /api/users/:id

Response:

Success (204 No Content): User deleted.

Error (404 Not Found): User not found.





Code Structure and Explanation

1. Database Configuration: config/db.js manages the MongoDB connection using Mongoose. It reads the connection URI from the .env file and handles connection errors.


2. User Model: models/User.js defines the User schema with the following validations:

name: Must be a non-empty string.

email: Must be a valid email format and unique.

age: Must be an integer greater than or equal to 0.



3. User Controller: controllers/userController.js contains logic for each CRUD operation:

createUser: Creates a new user with validation.

getAllUsers: Retrieves all users.

getUserById: Retrieves a specific user by ID.

updateUser: Updates a user by ID with validation.

deleteUser: Deletes a user by ID.



4. User Routes: routes/userRoutes.js defines the API endpoints and links them to controller functions.


5. Main App: index.js initializes Express, connects to MongoDB, and sets up routes. The server listens on the specified port.



Error Handling

Validation Errors: If a validation error occurs (e.g., missing fields or invalid data), the API responds with a 400 Bad Request status and a message describing the issue.

Duplicate Email: If an email already exists, the API returns a 409 Conflict status with an appropriate message.

General Errors: For unhandled exceptions or server issues, the API responds with a 500 Internal Server Error.

---
