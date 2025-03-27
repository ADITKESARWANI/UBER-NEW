# User API Endpoints

## Get User Profile
`GET /users/profile`

Retrieves the profile information of the currently authenticated user.

### Authorization
Requires a valid JWT token in the Authorization header.

### Response
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string",
    "createdAt": "string"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Unauthorized access"
}
```

## Logout User
`POST /users/logout`

Logs out the currently authenticated user by invalidating their JWT token.

### Authorization
Requires a valid JWT token in the Authorization header.

### Response
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Invalid token"
}
```
