import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Todo API çalışıyor!");
});

// Todo listesini getir
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

// Yeni todo oluştur
app.post("/todos", (req, res) => {
  const newTodo = req.body;

  res.status(201).json(newTodo);
});
// Todo güncelle

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedTodo = req.body;

  res.json({
    id: id,
    title: updatedTodo.title,
    completed: updatedTodo.completed
  });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  res.json({
    message: `Todo ${id} silindi`
  });
});

// Server'ı başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});