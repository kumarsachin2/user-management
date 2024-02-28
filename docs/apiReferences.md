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
- **Content:**

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

## 3. [Add a authenticated users favorite vehichle 🌁](#)

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

## 4. [Get all the added vehichles of a authenticated users 🌁](#)

- Related file: `src\controller\getVehicles.ts`

```http
  GET `http://localhost:5000/vehicle`
```

- Add a JWT token in the postman via selecting `Authorization`-> Select `Type` as `Bearer Token` and add the token to the field obtained in response after login.

## 5. [Update a authenticated users favorite vehichle 🌁](#)

- Related file: `src\controller\updateVehicle.ts`

```http
  PUT `http://localhost:5000/vehicle/:id`
```

- Add vehichle in the param, for example `http://localhost:5000/vehicle/D0UcvFPo`
- Add a JWT token in the postman via selecting `Authorization`-> Select `Type` as `Bearer Token` and add the token to the field obtained in response after login.
- There should be at least one of "make", "model", or "year" has to be provided

| Body    | Type     | Description  |
| :------ | :------- | :----------- |
| `make`  | `string` | **Optional** |
| `model` | `string` | **Optional** |
| `year`  | `number` | **Optional** |
