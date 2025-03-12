#welcome to Flight Service

## Project Setup

 - Clone the project on your local
 - Execute 'npm install' on the same path as of your root directry of the downloaded project
 - Create a .env file  in the root directory and add the following enviorment variable
 - PORT = 3000
 - Inside the "src/config" folder create a new file "config.json" adn then add the following piece of of json

---

{
  "development": {
    "username": <YOUR_DB_ROOT>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}







---