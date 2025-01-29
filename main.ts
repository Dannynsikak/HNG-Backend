import { Hono } from "@hono/hono";

// create the app
const app = new Hono();
const info = new Hono().basePath("/");
app.route("/", info);

// Public API Route
app.get("/api/info", (c) => {
  return c.json({
    email: "nsikakdanny11@gmail.com",
    timestamp: new Date().toISOString(),
    github: "https://github.com/Dannynsikak/HNG-Backend.git",
  });
});

// Start the server
if (import.meta.main) {
  Deno.serve({ hostname: "localhost", port: 5555 }, app.fetch);
}

console.log("✅ Server running at http://localhost:5555/api/info");
