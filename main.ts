import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

// Create the app
const app = new Hono();

// Enable CORS for all routes
app.use(
  cors({
    origin: "*",
    allowMethods: ["Get"],
    allowHeaders: ["Content-Type"],
  })
);

app.get("/api/info", (c) => {
  try {
    const response: {
      email: string;
      current_datetime: string;
      github_url: string;
    } = {
      email: "nsikakdanny11@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Dannynsikak/HNG-Backend",
    };
    return c.json(response);
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
