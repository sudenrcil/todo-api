import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Todo API çalışıyor!");
});

app.get("/todos", (req, res) => {
  res.json([
    {
      id: 1,
      title: "TypeScript öğren",
      completed: false
    },
    {
      id: 2,
      title: "REST API öğren",
      completed: false
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});