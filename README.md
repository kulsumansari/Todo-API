# Todo API
#### Key Concepts : NodeJS, Express, MVC

A RESTful API example for simple todo application with NodeJS

#### Installation and Run
 1. Installation
 
   - Clone the Repository
   
   ```
    git clone https://github.com/kulsumansari/Todo-API.git
  ```
  - navigate to the root folder and run the following commands to install node modules.
   
    ```
    npm install
    ```
    
    
  2. Run the Project
  
  ```
    nodemon app.js
  ```
    
#####API Endpoint : http://127.0.0.1:3001

## API

#### /tasks
* `GET` : Get all tasks
* `POST` : Create new task

    POST request body should be in JSON format.

    An example of POST request body for creating task is given below:
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

    POST request body should be in JSON format.

    An example of POST request body for creating task is given below:
    
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


## Project Folder Structure
```bash

├── app.js
├── package.json
├── package-lock.json
├── README.md
├── controllers
│   └── taskController.js
├── data
│   └── tasks.json
├── models
│   └── taskModel.js
├── routes
    └── taskRouter.js

```

