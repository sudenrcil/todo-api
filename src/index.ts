import express from "express";
import todoRoutes from "./routes/todoroutes.js";

const app = express();

app.use(express.json());

app.use(todoRoutes);

const PORT = 3000;

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Todo API çalışıyor!");
});

// Server'ı başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});