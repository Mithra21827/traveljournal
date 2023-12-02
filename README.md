# Containerizing React Application with Docker

This repository demonstrates how to containerize a React application using Docker. Containerization allows you to package the application and its dependencies into a lightweight, portable container, ensuring consistent and reproducible deployments.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (for running the React app locally without Docker)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Mithra21827/traveljournal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-react-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the React app locally:

   ```bash
   npm start
   ```

   Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Containerization with Docker

### Build Docker Image

1. Build the Docker image:

   ```bash
   docker build -t your-react-app .
   ```

   This command creates a Docker image named `your-react-app` based on the provided Dockerfile.

### Run Docker Container

2. Run a Docker container:

   ```bash
   docker run -d -p 3000:3000 your-react-app
   ```

   This maps port 3000 on your machine to port 3000 on the Docker container.

   Open your browser and visit [http://localhost:8080](http://localhost:8080) to view the React app running in a Docker container.
   
3. Bind mounts to sync src code

   To customize data persistence and allow interaction between the host machine and the container, you can use volume mounts. It's important to note that by default, Docker bind mounts are read-write.
   
   For windows user(cmd):
   ```bash
   docker run -d -p 3000:3000 -v %cd%\src:/app/src your-react-app
   ```
   
   For windows user(powershell):
   ```bash
   docker run -d -p 3000:3000 -v ${pwd}\src:/app/src your-react-app
   ```
   
   For linux user:
   ```bash
   docker run -d -p 3000:3000 -v $(pwd)\src:/app/src your-react-app
   ```
   
   This command includes the -v flag for volume mounting, where $(pwd)/src on your local machine is mounted to /app/src within the container.
   
5. Read only bind mounts to restrict write access
    
   To enhance security and restrict write access to certain parts of the container, you can use read-only bind mounts. This prevents any changes made within the specified directories from being persisted to the container.

   For windows user(cmd):
   
   ```bash
   docker run -d -p 3000:3000 -v %cd%\src:/app/src:ro your-react-app
   ```
   
   The ':ro' at the end signifies that the mount is read-only.

6. Environment variables

   To enhance security and configure your React application within a Docker container, you can set environment variables.

   For windows user(cmd):
   
   ```bash
   docker run -d -e REACT_APP_NAME="AppTitle" -p 3000:3000 -v %cd%\src:/app/src:ro your-react-app
   ```
   
   -e flag for setting environment variables. In this example, REACT_APP_NAME is set to the REACT_APP_NAME of your React App.
   
8. Docker Compose:

   The existing docker-compose.yml file contains the necessary services, volumes, and configurations for your project.

   ```bash
   docker-compose up -d
   ```
   This command starts the services defined in your docker-compose.yml in detached mode.

   ```bash
   docker-compose down
   ```
   This command bring all the services defined in your docker-compose.yml down.

    ```bash
   docker-compose down -build
   ```
   This command rebuild the image.
   
## Additional Commands

- Stop the running container:

  ```bash
  docker stop $(docker ps -q --filter ancestor=your-react-app)
  ```

- Remove the stopped container:

  ```bash
  docker rm $(docker ps -aq --filter ancestor=your-react-app)
  ```

- Remove the Docker image:

  ```bash
  docker rmi your-react-app
  ```

