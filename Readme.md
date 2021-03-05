# Project: Pokemon-REST
## How to run the application
- create an ``.env`` file (check the .env.sample for reference)
- run ``npm install``
- run ``npm start``

*NOTES: you can import the file ``pokemon.postman_collection.json`` to Postman and test the endpoint (Optional)

# API Docs

## End-point: http://localhost:3000/api/?limit=
### Method: GET
### Description: 
### Query Params

|Param|value type|
|---|---|
|limit|int|
- limit (int): to limit the total result

### Example

>```
>http://localhost:3000/api/?limit=2
>```

### Response
```json
[
    {
        "id": "57072197-e96e-4bf7-83e9-23c740183216",
        "number": "001",
        "name": "Charizard",
        "types": [
            "Fire",
            "Water",
            "Dark"
        ]
    },
    {
        "id": "57072107-e96e-4bf7-83e9-23c740183216",
        "number": "002",
        "name": "Bulbasaur",
        "types": [
            "Grass",
            "Poison"
        ]
    }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:3000/api
### Method: POST
### Description: 
Accept JSON type body, example:

```json 
{ 
"id": "57072197-e96e-4bf7-83e9-23c740183216", 
"number": "001", 
"name": "Bulbasaur", 
"types": [ "Grass", "Poison" ] 
}
```

### Example

>```
>http://localhost:3000/api
>```
### Body (**raw**)

```json
{
    "id": "57072197-e96e-4bf7-83e9-23c740183216",
    "number": "001",
    "name": "Bulbasaur",
    "types": [
        "Grass",
        "Poison"
    ]
}
```

### Response

```json
{
    "message": "OK
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: http://localhost:3000/api/:id
### Method: PUT
### Description: 
Accept JSON type body, example:

```json 
{
  "id": "57072197-e96e-4bf7-83e9-23c740183216",
  "number": "001",
  "name": "Bulbasaur",
  "types": [
    "Grass",
    "Poison"
  ]
}
```

Parameter:
- id: the pokemon id

### Example

>```
>http://localhost:3000/api/57072197-e96e-4bf7-83e9-23c740183216
>```
### Body (**raw**)

```json
{
    "id": "57072197-e96e-4bf7-83e9-23c740183216",
    "number": "001",
    "name": "Charizard",
    "types": [
        "Fire",
        "Water"
    ]
}
```
### Response

```json
{
    "message": "OK
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: http://localhost:3000/api/:id
### Method: DELETE
### Description: 
Parameter:
- id: the pokemon id

### Example

>```
>http://localhost:3000/api/57072197-e96e-4bf7-83e9-23c740183211
>```

### Response

```json
{
    "message": "OK
}
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________
Author: [Gani Ilham Irsyadi](https://github.com/ganiirsyadi)
