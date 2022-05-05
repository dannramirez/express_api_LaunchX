# ⭐️ API with Express Server - LaunchX

Requerimientos

```markdown

API Express Server testing all HTTP Methods

```

### Dependencies

*Dependencies*

* Express

**Scripts**

* npm start - to run express Server

### Routes

| Route             | Method | Expected          |
| ----------------- | ------ | ----------------- |
| /v1/explorers     | GET    | All Explorers     |
| /v1/explorers/:id | GET    | Specific explorer |
| /v1/explorers/    | POST   | Create explorer   |
| /v1/explorers/    | PUT    | Update explorer   |
| /v1/explorers/    | DEL    | Delete explorer   |



This endpoints are from Express API LaunchX, to test HTTP methods with test enviroment.

# End-point: localhost:3000/v1/explorers

### Method: GET

> ```
> localhost:3000/v1/explorers
> ```
>

### Body (**raw**)

```json

```

### Output

Object array with all users.

![1651710367828.png](image/Readme/1651710367828.png)

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: localhost:3000/v1/explorers/1

### Method: GET

> ```
> localhost:3000/v1/explorers/1
> ```
>

### Output

Get user data from ID.

![1651710453507.png](image/Readme/1651710453507.png)

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: localhost:3000/v1/explorers

### Method: POST

> ```
> localhost:3000/v1/explorers
> ```
>

### Body (**raw**)

```json
{
    "name":"dann"
}
```

### Output

Create a new explorer. Need to send data in body.

![1651710496373.png](image/Readme/1651710496373.png)

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: localhost:3000/v1/explorers/:id

### Method: PUT

> ```
> localhost:3000/v1/explorers/1
> ```
>

### Body (**raw**)

```json
{"name":"danno"}
```

### Output

Update explorer data with specific ID.

![1651710540164.png](image/Readme/1651710540164.png)

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: localhost:3000/v1/explorers/1

### Method: DELETE

> ```
> localhost:3000/v1/explorers/1
> ```
>

### Output

Delete explorer with specific ID.

![1651710576793.png](image/Readme/1651710576793.png)

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
