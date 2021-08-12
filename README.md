# Todo API
#### Key Concepts : NodeJS, Express, MVC

A RESTful API example for simple todo application with NodeJS

#### Installation and Run
```bash
Download the code repository 
navigate to the root folder and run the following commands.
>> npm install
>> nodemon start

# API Endpoint : http://127.0.0.1:3001
```
## API

#### /tasks
* `GET` : Get all tasks
* `POST` : Create new task

    Post request body should be in JSON format.

    An example of Post request body for creating task is given below:
```json
{
    "content" : " Go to gym",
    "createdAt" : "11/08/2021",
    "updatedAt" : "12/08/2021"
} 
```

>> **Note :** "content" , "createdAt" , "updatedAt"  are only valid keys for creating task.

   Upon the creation of new task id will be dynamically assigned and isCompleted is set to false.

#### /tasks/:id
* `GET` : Get a task by Id
* `POST` : Update a task by Id

    Post request body should be in JSON format.

    An example of Post request body for creating task is given below:
    
```json
{
    "content" : " Go to gym",
    "createdAt" : "11/08/2021",
    "updatedAt" : "12/08/2021",
    "isCompleted" : true,
}
```
>> **Note :** "content" , "createdAt" , "updatedAt" , "isCompleted"  are only valid keys for updating task.

* `DELETE` : Delete a task by Id




