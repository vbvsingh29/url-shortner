# URL Shortener
 URL Shortener project! This README will provide you with an overview of this simple project for exploring URL shortening functionality.

## Tech Stack

- Frontend:
  - React
  - Chakra UI

- Backend:
  - Node.js
  - Express.js
  - Mongoose (MongoDB ORM)

## Purpose

The purpose of this project is to create a basic URL shortening service. URL shorteners take long URLs and create shorter, more manageable links that redirect to the original URL. This project is ideal for understanding the fundamentals of building such a service and exploring the interaction between frontend and backend components.

## Features

- Shorten URLs: Input a long URL and get a shortened version that redirects to the original URL.
  
- View Statistics: Track the number of times each shortened URL is accessed.

## Getting Started

To get started with the URL Shortener project, follow these steps:

1. Clone the repository:

 ```bash
   git clone https://github.com/vbvsingh29/url-shortner.git
```

```bash
cd url-shortener
```

# Install backend dependencies
``` bash
cd server
yarn
```
# From the backend directory , To start server
```bash 
yarn dev
```

# Install frontend dependencies
```bash
cd ../client
yarn
```

# From the Client directory , to start client
``` bash
yarn start
```

Be sure to add MongoDB URI in Environemnt variables of server 
- `DB_URI`: MongoDb uri
- `PORT`: For server 

Env for Client side 
- `REACT_APP_API_ENDPOINT`: Sever endpoint to hit API
  
