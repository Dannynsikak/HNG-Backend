# Hono API Server

This project demonstrates a simple API server built with Hono, a lightweight and fast web framework for Deno. The server exposes a public API route that returns information like an email, timestamp, and GitHub repository URL.

# Features

    Public API Route: Returns information about the server.
    CORS Support: The server is set up to handle CORS preflight requests (if needed).
    Timestamp Generation: Each request includes a timestamp of when the response is generated.
    Endpoints
    GET /api/info
    Description: Returns information about the server, including email, current timestamp, and GitHub repository URL.

Response:

    json

        {
        "email": "nsikakdanny11@gmail.com",
        "timestamp": "2025-01-29T12:00:00.000Z",
        "github": "https://github.com/Dannynsikak/HNG-Backend.git"
        }

Requirements
Deno: This project uses Deno as the runtime environment. Make sure you have Deno installed on your machine.
To install Deno:
Visit the official Deno website for installation instructions.
To verify installation:

deno --version
Setup & Installation
Clone this repository:

git clone https://github.com/Dannynsikak/HNG-Backend.git
Navigate into the project directory:

cd HNG-Backend
Run the application:

deno run --allow-net --allow-env app.ts
The --allow-net flag grants the server permission to listen on a network, and --allow-env grants permission to access environment variables (if required).

Visit the following URL to access the API:

http://localhost:5555/api/info
Running the App
Once the server is running, you should see a message like:

arduino

✅ Server running at http://localhost:5555/api/info
You can use this endpoint to retrieve the server information as a JSON response.
