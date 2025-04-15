const express = require("express");
const path = require("path");
const sessions = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const app = express();
const port = process.env.PORT || "8887";

// ✅ CORS MUST come before routes
app.use(cors({
  origin: "http://localhost:5173", // OR your Vercel frontend URL
  credentials: true
}));

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sessions({
  secret: process.env.SESSIONSECRET,
  name: "MyUniqueSessID",
  saveUninitialized: false,
  resave: false,
  cookie: {} 
}));

// ✅ API route BEFORE React fallback
app.get("/api", async (req, res) => {
  try {
    const collection = db.collection("positions"); // depends on how your db exports
    const positions = await collection.find().toArray();
    res.json(positions);
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Failed to fetch positions." });
  }
});


// ✅ Serve React build
const clientBuildPath = path.join(__dirname, "client", "dist");
app.use(express.static(clientBuildPath));

// ✅ React fallback should be LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
