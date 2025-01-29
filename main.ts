import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

// Create the app
const app = new Hono();

// Enable CORS for all routes
app.use(cors());

app.get("/api/info", (c) => {
  try {
    return c.json({
      email: "nsikakdanny11@gmail.com",
      timestamp: new Date().toISOString(),
      github: "https://github.com/Dannynsikak/HNG-Backend.git",
    });
  } catch (error) {
    console.error("Error handling request:", error); // logs the error
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// 404 Not Found Handler
app.notFound((c) => {
  return c.json({ error: "Route not found" }, 404);
});

// Start the server
if (import.meta.main) {
  Deno.serve({ hostname: "localhost", port: 5555 }, app.fetch);
  console.log("✅ Server running at http://localhost:5555/api/info");
}
