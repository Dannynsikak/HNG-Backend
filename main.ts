import { Hono } from "@hono/hono";

// create the app
const app = new Hono();
const info = new Hono().basePath("/");
app.route("/", info);

// Public API Route
app.get("/api/info", (c) => {
  return c.json({
    email: "nsikakdanny11@gmail.com", // Replace with youri actual email
    timestamp: new Date().toISOString(),
    github: "https://github.com/your-repo", // Replace with your actual GitHub repo
  });
});

// Start the server
if (import.meta.main) {
  Deno.serve({ hostname: "localhost", port: 5555 }, app.fetch);
}

console.log("✅ Server running at http://localhost:5555/api/info");
