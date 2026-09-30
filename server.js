import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import aiRoutes from "./routes/ai.js";

dotenv.config();

// TEMPORARY DEBUG — remove after confirming the key loads correctly
console.log(
  process.env.NVIDIA_API_KEY
    ? `NVIDIA key loaded: ${process.env.NVIDIA_API_KEY.slice(0, 10)}... (length ${process.env.NVIDIA_API_KEY.length})`
    : "NO NVIDIA_API_KEY FOUND in .env"
);



const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use("/api/ai", aiRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for all routes (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`EduStack server running on port ${PORT}`);
});