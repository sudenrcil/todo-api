import { Router } from "express";

const router = Router();

router.get("/todos", (req, res) => {
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
router.post("/todos", (req, res) => {
  const newTodo = req.body;

  res.status(201).json(newTodo);
});

router.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedTodo = req.body;

  res.json({
    id: id,
    title: updatedTodo.title,
    completed: updatedTodo.completed
  });
});

export default router;