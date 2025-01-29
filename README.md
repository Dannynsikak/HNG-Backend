# Hono API Server

This project demonstrates a simple API server built with Hono, a lightweight and fast web framework for Deno. The server exposes a public API route that returns information like an email, timestamp, and GitHub repository URL.

# Features

    Public API Route: Returns information about the server.
    CORS Support: The server is set up to handle CORS preflight requests.
    Timestamp Generation: Each request includes a timestamp of when the response is generated.
    Endpoints
    GET /api/info

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
Visit the [official Deno website](https://deno.com/) and scroll down a bit. You will see an Install Deno section with the commands to install precompiled binaries for Deno.
Here is a sample command for installing Deno in MacOS/Linux from their website.

    curl -fsSl https://deno.land/install.sh | sh

    Once you run the command, you will be prompted with "Edit shell configs to add deno to the PATH?". Type "Y" and press Enter

To verify installation:
deno --version

Setup & Installation

    Clone this repository:

    git clone https://github.com/Dannynsikak/HNG-Backend.git

Navigate into the project directory:

    cd HNG-Backend

Run the application:

    deno run --allow-net serve
    The --allow-net flag grants the server permission to listen on a network.

# Testing with postman

    - Get API Info
    Endpoint:
    GET /api/info
    Request:
    Method: GET
    Headers: (required)
    Response:
    Success (200 OK)
    json

    {
    "email": "nsikakdanny11@gmail.com",
    "timestamp": "2024-01-29T12:34:56.789Z", (This will be a dynamically generated time)
    "github": "https://github.com/Dannynsikak/HNG-Backend.git"
    }
    Error (404 Not Found)

    json
    {
    "error": "Route not found"
    }

    Error (500 Internal Server Error)
    json
    {
    "error": "Internal Server Error"
    }

# note

    `If you are receiving linting errors like "ImportMeta main not found", try pressing the following keys in succession and combination: hold **Ctrl+Shift then press P**. Then type "Deno Enable". It should select the first found VSCode command. Press Enter. This should create a .vscode folder with a settings.json containing the following contents.

        {
        "deno.enable": true
        }

    It should fix most of the linting issues you get. The previous lint errors are not from Deno but from the built-in Typescript support in VSCode.`

Visit the following URL to access the API:

    http://localhost:5555/api/info

Running the App
Once the server is running, you should see a message like:

✅ Server running at http://localhost:5555/api/info
You can use this endpoint to retrieve the server information as a JSON response.
