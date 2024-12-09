# Reversi app

## Project Overview

This reversi application was created to learn about application architecture.

## Technologies Used

This app was created using the following technology stack.

| Category       | Technology used           |
| -------------- | ------------------------- |
| Frontend       | HTML<br>CSS<br>JavaScript |
| Backend        | TypeScript<br>Express.js  |
| Database       | MySQL                     |
| InfraStructure | docker<br>                |

## Architecture Overview

This project follows a layered architecture design, ensuring modularity, scalability, and ease of maintenance. The diagram above illustrates how the components are structured and interact with one another to handle requests and generate responses.

## System Design Philosophy

The architecture is designed to:

- Separate concerns between business logic, data access, and presentation.
- Minimize dependencies between layers.
- Make the system testable and extensible.

## Layer Descriptions

Each component in the architecture has a distinct responsibility:

- **Request/Response**: Handles incoming and outgoing data. Acts as the entry and exit points of the system.
- **Router**: Routes the incoming requests to the appropriate service.
- **Service**: Contains business logic and orchestrates interactions between other layers.
- **Model**: Represents the data structure or domain objects used within the system.
- **Repository**: Handles data persistence and retrieval, interacting with the database or other storage systems.
- **Gateway**: Acts as an interface to external systems, ensuring clean integration points.
- **Output**: Prepares the response to be returned to the client.
- **Record**: Represents database records or raw data from the storage system.

## How It Works

1. A **Request** is sent to the system.
2. The **Router** determines which **Service** to invoke based on the request.
3. The **Service** processes the request, often interacting with:
   - **Models** for manipulating domain objects.
   - **Repositories** for accessing data.
   - **Gateways** for communicating with external systems.
4. The processed result is passed to the **Output** layer for response formatting.
5. The final **Response** is sent back to the client.

## Responsibilities of Each Component

Here’s a closer look at each layer:

- **Router**: Ensures the right services are called based on request attributes.
- **Service**: Contains reusable business logic.
- **Repository**: Abstracts data access, enabling flexibility in storage solutions.
- **Gateway**: Encapsulates external service calls to reduce coupling.
- **Model**: Keeps business logic and validation consistent.

## How to Run

Follow the steps below to clone the repository and start the application:

1.  **Clone the repository**  
    Use the following command to clone the repository from GitHub:

        git clone https://github.com/IkUmO1118/reversi-app

2.  **Install dependencies**  
    Install the required npm packages:

        npm install

3.  **Start Docker containers**  
    Use Docker Compose to start the necessary containers:

        docker compose up -d

4.  **Connect to MySQL**  
    Run the script to connect to the MySQL database:

        bash ./bin/connect_mysql.sh

5.  **Create tables**  
    Load the DDL to create the required database tables:

        bash ./bin/load_ddl.sh

6.  **Start the application**  
    Run the following command to start the application:

        npm run start

## Contact

- **Email** : ikumo1118free@gmail.com
- **Phone Number** : 080-7743-8445
