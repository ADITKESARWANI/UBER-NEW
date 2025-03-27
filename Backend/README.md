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

## `/users/login` Endpoint

## Description
This endpoint is used to authenticate an existing user. It validates the user's credentials and returns an authentication token along with user details.

## HTTP Method & URL
- **Method:** POST
- **URL:** `/users/login`

## Required Data
The request body must be a JSON object containing:
- `email`: A string representing the user's email, required.
- `password`: A string representing the user's password, required.

### Example Request Body
```json
{
  "email": "john@example.com",
  "password": "securePass123"
}
```

## Response and Status Codes

### Success (200)
- **Status Code:** 200
- **Response:** Returns a JSON object containing:
  - `token`: Authentication token.
  - `user`: The logged-in user's details.

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

### Error (400/401)
- **Status Code:** 400 or 401
- **Response:** Returns an error message detailing any validation issues or invalid credentials.

## `/captain/register` Endpoint

## Description
This endpoint is used to register a new captain (driver). It saves the captain's details including vehicle information in the database and returns the captain's details.

## HTTP Method & URL
- **Method:** POST
- **URL:** `/captain/register`

## Required Data
The request body must be a JSON object containing:
- `fullname`: An object with:
  - `firstname` (string, required, minimum 6 characters)
  - `lastname` (string, required, minimum 6 characters)
- `email`: A string representing the captain's email, required.
- `password`: A string representing the captain's password, required (minimum 6 characters).
- `vehical`: An object with:
  - `color` (string, required, minimum 6 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (string, required, minimum 1 character)
  - `vehicalType` (string, required, must be one of: 'car', 'motorcycle', 'auto')

### Example Request Body
```json
{
  "fullname": {
    "firstname": "CaptainJohn",
    "lastname": "Smith"
  },
  "email": "captain.john@example.com",
  "password": "securePass123",
  "vehical": {
    "color": "midnight blue",
    "plate": "ABC123",
    "capacity": "4",
    "vehicalType": "car"
  }
}
```

## Response and Status Codes

### Success (201)
- **Status Code:** 201
- **Response:** Returns a JSON object containing the registered captain's details.

#### Example Response (Success)
```json
{
  "fullname": {
    "firstname": "CaptainJohn",
    "lastname": "Smith"
  },
  "email": "captain.john@example.com",
  "vehical": {
    "color": "midnight blue",
    "plate": "ABC123",
    "capacity": "4",
    "vehicalType": "car"
  }
}
```

### Error (400)
- **Status Code:** 400
- **Response:** Returns an error message detailing any validation issues.
