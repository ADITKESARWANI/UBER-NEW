# Backend API Documentation

## `/users/register` Endpoint

## Description
This endpoint is used to register a new user. It saves the user details in the database, creates a hashed password, and returns an authentication token along with user details.

## HTTP Method & URL
- **Method:** POST
- **URL:** `/users/register`

## Required Data
The request body must be a JSON object containing:
- `fullname`: An object with:
  - `firstname` (string, required, minimum 6 characters)
  - `lastname` (string, optional or required as per your business logic, minimum 6 characters if provided)
- `email`: A string representing the user's email, required.
- `password`: A string representing the user's password, required (minimum 6 characters).

### Example Request Body
```json
{
  "fullname": {
    "firstname": "JohnDoe",
    "lastname": "Smith"
  },
  "email": "john@example.com",
  "password": "securePass123"
}
```

## Response and Status Codes

### Success (201)
- **Status Code:** 201
- **Response:** Returns a JSON object containing:
  - `token`: Authentication token.
  - `user`: The registered user's details (without the password).

#### Example Response (Success)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "firstname": "JohnDoe",
    "lastname": "Smith",
    "email": "john@example.com"
    // ...other user details...
  }
}
```

### Error (400)
- **Status Code:** 400
- **Response:** Returns an error message detailing any validation issues. For example, if required fields are missing or do not meet validation rules.
