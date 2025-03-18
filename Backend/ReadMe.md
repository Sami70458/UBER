# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

#### Notes
- Ensure that the `Content-Type` header is set to `application/json`.
- The `password` field will be hashed before storing in the database.

### POST /users/login

#### Description
This endpoint authenticates an existing user and returns a JWT token.

#### Request Body
The request body should be a JSON object with the following fields:
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: User successfully authenticated.
  - **Body**: JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: JSON object containing validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid credentials.
  - **Body**: JSON object with error message.
  - **Example**:
    ```json
    {
      "message": "Invalid email"
    }
    ```
    or
    ```json
    {
      "message": "Invalid password" 
    }
    ```

#### Notes
- Ensure that the `Content-Type` header is set to `application/json`
- The password is compared with the hashed version stored in the database


### GET /users/profile

#### Description
This endpoint retrieves the profile information of the authenticated user.

#### Authentication
Requires a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

#### Responses

- **200 OK**
  - **Description**: Successfully retrieved user profile.
  - **Body**: JSON object containing user details.
  - **Example**:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token.
  - **Body**: JSON object with error message.
  - **Example**:
    ```json
    {
      "message": "Authentication required"
    }
    ```

### GET /users/logout

#### Description
This endpoint logs out the current user and invalidates their token.

#### Authentication
Requires a valid JWT token either in:
- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

#### Responses

- **200 OK**
  - **Description**: Successfully logged out.
  - **Body**: JSON object with success message.
  - **Example**:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token.
  - **Body**: JSON object with error message.
  - **Example**:
    ```json
    {
      "message": "Authentication required"
    }
    ```

#### Notes
- The token is added to a blacklist to prevent reuse
- The auth cookie is cleared upon logout

## Captain Endpoints

### POST /captains/register

#### Description
This endpoint is used to register a new captain (driver).

#### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)
- `vehicle`: An object containing:
  - `color` (string, required, minimum length: 3)
  - `plate` (string, required, minimum length: 3)
  - `capacity` (number, required)
  - `vehicleType` (string, required, enum: ['car', 'motorcycle', 'auto'])

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**
  - **Description**: Captain successfully registered.
  - **Body**: JSON object containing the authentication token and captain details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.driver@example.com",
        "vehicle": {
          "color": "black",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: JSON object containing validation errors.
  - **Example**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Color must be at least 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Invalid vehicle type",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```

#### Notes
- Ensure that the `Content-Type` header is set to `application/json`
- The `password` field will be hashed before storing in the database
- Valid vehicle types: 'car', 'motorcycle', 'auto'