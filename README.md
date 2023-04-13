# To-Do Project
## Hi friend! <img src="https://c.tenor.com/p2Fs2DoSLWYAAAAC/hello-cute.gif" width="40">
The To-Do-List Project is a to-do list application built with Java-Spring for the backend and JavaScript-React for the frontend. 
Both components are connected, allowing users to create, read, update, and delete tasks from the front-end and back-end. 
The project includes a RESTful API that can be accessed via Postman, allowing users to perform CRUD (Create, Read, Update, Delete) operations on the to-do list.

The design of the application is inspired by Microsoft's To Do List, with the CSS being closely modeled after their design.

## Getting Started
### Prerequisites
Before getting started, you must have the following software installed on your machine:

* Java 8 or higher
* Node.js and npm
* IDE of your choice (e.g. IntelliJ IDEA, Eclipse, VS Code)

### Installation
1. Clone or download the repository to your local machine.
* Copy Code                                      
  ```bash
  git clone https://github.com/ClaudiaCalero/To-Do-Project.git
  ```
2. Open the todo-list-backend folder in your preferred IDE.
3. Run the TodoListApplication class to start the backend. The backend will start on port 8080.
4. Open a new terminal window and navigate to the todo-list-frontend folder.
5. Install the required dependencies by running the following command:
* Copy 
 ```
npm install
  ```
6. Run the frontend by running the following command:
* sql
 ```
npm start
  ```
The frontend will start on port 3000.

## API Endpoints

| HTTP Method        | Endpoint           | Description  |
| ------------- |:-------------:| -----:|
| GET      | / | Retrieve all tasks  |
| POST     | /    | Create a new task |
| PUT | /{id} |    Update an existing task by ID |
| DELETE |/{id}  |    Delete an existing task by ID |

## Sample API Requests
Here are some sample requests that can be made to the API using Postman:

### Retrieve all tasks:

##### Copy Code
            
    GET http://localhost:8080/
            

### Create a new task:

##### Copy Code
    
    POST http://localhost:8080/
    

Body:

    {
        "content": "Review and approve project documentation, including contracts, agreements, and scope of work.",
        "completed": false
    }
    
### Update an existing task:

##### Copy Code
 
    PUT http://localhost:8080/{id}
    
  
Body:
```
{
    "id": 80,
    "content": "Develop a project budget and allocate resources accordingly.",
    "completed": false
}
```


### Delete an existing task:
##### Copy Code
 
    DELETE http://localhost:8080/{id}

  


## Connecting the Frontend and Backend
To connect the frontend and backend, you will need to make API requests from the frontend to the backend. 
This can be done using the fetch API or a library like axios.

In the src/App.js file, you will find examples of how to make API requests to create, read, update, and delete tasks. 
You will need to update the URLs in these requests to match the endpoints in your backend API.

## Working on: 
Currently, I am focusing on making my app responsive to different screen sizes and devices. 

## Contributing
Contributions to the To-Do-List Project are welcome. If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.


## Desktop Version 
![mockup](https://user-images.githubusercontent.com/92159714/231806814-260b8691-0baa-473f-991a-698f95985c3e.jpeg)





### <img src="http://37.media.tumblr.com/44d4fb34d7d9a0407c8fd5520e2c3123/tumblr_nago0vkGOD1tbhv9ro1_500.gif" width="40"> Hope, you will enjoy it! 

✒️Clàudia Calero Duró 

👀 github: https://github.com/ClaudiaCalero

📍Linkedin: https://www.linkedin.com/in/claudia-calero/
