# GraphQLTest


## Setup

```sh

# for development
npm run watch

# for production
npm start
```

## Query
Go to this URL: http://localhost:3007/graphql
````
query{
firstName
  lastName
  email
  password
}
````


## Mutation
Go to this URL: http://localhost:3007/graphql

````
mutation AddNewLightboxUser($data: UserInput!) {
  AddUser(data: $data){ 
    firstName
    lastName
    email
    password
  }
}
````

Query Variables
````
{
  "data": {
    "firstName": "Anna",
    "lastName": "Sharma",
    "email": "dsharma@lightbox.co.nz",
    "password": "pass"
  }
}
````
