# 🧳 API References

## 1. [Register a new user 🌁](#)

- Related file: `src\controller\addUser.ts`

```http
  POST `http://localhost:5000/user/add`
```

| Body       | Type     | Description  |
| :--------- | :------- | :----------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

### Responses

#### Success response

- **Status Code:** 201

```json
{
  "userName": "username",
  "message": "User created successfully"
}
```

#### User already exists

- **Status Code:** 400

```json
{
  "error": "Username already exists"
}
```

#### Error response when "username" is missing

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["username"],
      "message": "Required"
    }
  ],
  "name": "ZodError"
}
```

#### Error response when "password" is missing

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["password"],
      "message": "Required"
    }
  ],
  "name": "ZodError"
}
```

#### Error response when password criteria does not match (Atleast -> 8 characters, one uppercase, one lowercase, one special character, one number )

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "too_small",
      "minimum": 8,
      "type": "string",
      "inclusive": true,
      "exact": false,
      "message": "Password must be at least 8 characters long",
      "path": ["password"]
    },
    {
      "validation": "regex",
      "code": "invalid_string",
      "message": "Password must contain at least one uppercase letter",
      "path": ["password"]
    },
    {
      "validation": "regex",
      "code": "invalid_string",
      "message": "Password must contain at least one digit",
      "path": ["password"]
    },
    {
      "validation": "regex",
      "code": "invalid_string",
      "message": "Password must contain at least one special character",
      "path": ["password"]
    }
  ],
  "name": "ZodError"
}
```

## 2. [Login of a user 🌁](#)

- Related file: `src\controller\addUser.ts`

```http
  POST `http://localhost:5000/user/login`
```

| Body       | Type     | Description  |
| :--------- | :------- | :----------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

### Responses

#### Success response

- **Status Code:** 201

```json
{
  "userName": "username",
  "token": "token"
}
```

#### Error response

- **Status Code:** 401

```json
{
  "error": "Invalid username or password"
}
```

#### Error response when "username" is missing

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["username"],
      "message": "Required"
    }
  ],
  "name": "ZodError"
}
```

#### Error response when "password" is missing

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["password"],
      "message": "Required"
    }
  ],
  "name": "ZodError"
}
```

## 3. [Add an authenticated user favorite vehichle 🌁](#)

- Related file: `src\controller\addVehicle.ts`

```http
  POST `http://localhost:5000/vehicle/add`
```

- Add a JWT token in the postman via selecting `Authorization`-> Select `Type` as `Bearer Token` and add the token to the field obtained in response after login.

| Body    | Type     | Description  |
| :------ | :------- | :----------- |
| `make`  | `string` | **Required** |
| `model` | `string` | **Required** |
| `year`  | `number` | **Required** |

### Responses

#### Success Response

- **Status Code:** 201

```json
{
    "userName": "username",
    "userVehicles": [
        {
            "id": "id",
            "make": "make",
            "model": "model",
            "year": year
        }
    ],
    "message": "Vehicle saved successfully"
}
```

#### Unauthorized Error Response

- **Status Code:** 401

```json
{
  "error": "Unauthorized: Invalid token"
}
```

#### If any of the required (make, model, year) fields is/are missing

- **Status Code:** 400

```json
{
  "issues": [
    {
      "code": "invalid_type",
      "expected": "string", // "number" in case of "year"
      "received": "undefined",
      "path": [
        "path" // make, model or year
      ],
      "message": "Required"
    }
  ],
  "name": "ZodError"
}
```

## 4. [Get all the added vehicles of authenticated users 🌁](#)

- Related file: `src\controller\getVehicles.ts`

```http
  GET `http://localhost:5000/vehicle`
```

- Add a JWT token in the postman via selecting `Authorization`-> Select `Type` as `Bearer Token` and add the token to the field obtained in response after login.

### Responses

#### Success Response

- **Status Code:** 201

```json
{
    "userName": "username",
    "userVehicles": [
        {
            "id": "id",
            "make": "make",
            "model": "model",
            "year": year
        }
    ],
}
```

#### Unauthorized Error Response

- **Status Code:** 401

```json
{
  "error": "Unauthorized: Invalid token"
}
```

## 5. [Update an authenticated users favorite vehichle 🌁](#)

- Related file: `src\controller\updateVehicle.ts`

```http
  PATCH `http://localhost:5000/vehicle/:id`
```

- Add vehicle in the param, for example, `http://localhost:5000/vehicle/D0UcvFPo`
- Add a JWT token in the postman via selecting `Authorization`-> Select `Type` as `Bearer Token` and add the token to the field obtained in response after login.
- There should be at least one "make", "model", or "year" has to be provided

| Body    | Type     | Description  |
| :------ | :------- | :----------- |
| `make`  | `string` | **Optional** |
| `model` | `string` | **Optional** |
| `year`  | `number` | **Optional** |

### Responses

#### Success Response

- **Status Code:** 201

```json
{
    "userName": "username",
    "userVehicles": [
        {
            "id": "id",
            "make": "make",
            "model": "model",
            "year": year
        }
    ],
    "message": "Vehicle data updated successfully"
}
```

#### Unauthorized Error Response

- **Status Code:** 401

```json
{
  "error": "Unauthorized: Invalid token"
}
```

#### If the wrong vehicle `id` is passed

- **Status Code:** 400

```json
{
  "error": "Vehicle not found"
}
```

#### If none of the `make`, `model`, or `year` is provided

- **Status Code:** 400

```json
{
  "error": "At least one of make, model, or year must be provided"
}
```
