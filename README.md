# Flyro-Backend - API

## User Registration Endpoint

This endpoint is used to register a new user.

### HTTP Method

- `POST`

### Endpoint URL

- `/api/v1/users/register`

### Request Body

The request body should contain the following fields:

- `fullname`: An object with two properties:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A string with a minimum length of 5 characters, representing a valid email address.
- `password`: A string with a minimum length of 6 characters.

Example Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response Body

The response body should contain the following fields:

- `user`: An object with two properties:
  - `fullname`: An object with two properties:
    - `firstname`: A string with a minimum length of 3 characters.
    - `lastname`: A string with a minimum length of 3 characters.
- `token`: A jwt token.

Example Response Body:

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "dummyToken"
}
```

# User Login Endpoint

This endpoint is used to login an existing user.

## HTTP Method

- `POST`

## Endpoint URL

- `/api/v1/users/login`

## Request Body

The request body should contain the following fields:

- `email`: A string representing the user's email address.
- `password`: A string representing the user's password.

## Example Request Body

````json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
### Response Body

The response body should contain the following fields:

- `user`: An object with two properties:
  - `fullname`: An object with two properties:
    - `firstname`: A string with a minimum length of 3 characters.
    - `lastname`: A string with a minimum length of 3 characters.
- `token`: A jwt token.

Example Response Body:

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "dummyToken"
}
````
