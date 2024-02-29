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

#### Success Response

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

#### Error Response

- **Status Code:** 400

```json
{
  "error": "Username and password are required"
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

#### Success Response

- **Status Code:** 201

```json
{
  "userName": "username",
  "token": "token"
}
```

#### Error Response

- **Status Code:** 401

```json
{
    "error": "Invalid username or password"
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

#### If any of the required fields is/are missing

- **Status Code:** 400

```json
{
    "error": "Make, model, and year are required"
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
  PUT `http://localhost:5000/vehicle/:id`
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
