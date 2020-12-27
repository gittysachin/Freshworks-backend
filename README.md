# Freshworks key-value data store Backend assignment 

In the project directory, perform following action: 

1.	`npm install`  
2.	`node server.js` (starting the server)

3.	Open postman ( or command line to execute CURL commands ) for executing create, read and delete a data in and from a JSON file.

## Create API Call -

4.	POST method ( http://localhost:5000/create )

```
curl --location --request POST 'http://localhost:5000/create' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "key2" : {"name":"Sachin","age":21, "company": "freshworks"},
    "Ttl":120
  }'
```
You can set property called time-to-live for a key and write into a json file and this property is an optional. If ttl(in seconds) is given then the key will not be accessed for further read or delete operations after that time duration reached .

It should be post in this way : Use postman and pass the key value pair in body.
`http://localhost:5000/create`

```
{
  "key2" : {"name":"Sachin","age":21, "company": "freshworks"},
  "Ttl":120
}
```

## Read API Call - 

5.	GET method ( http://localhost:5000/read/key ) eg:key=key1(string)

`curl --location --request GET 'http://localhost:5000/read/key1'`

## Delete API Call - 

6.	GET method ( http://localhost:5000/delete/key )

`curl --location --request GET 'http://localhost:5000/delete/key1'`


For the above key its time to live duration is 120sec(2mins) after that key1 will be expired. If ttl is not given then it can be accessed everytime!