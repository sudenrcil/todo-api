import type { Request, Response } from "express";

export const getTodos = (req: Request, res: Response) => {
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
};
export const createTodo = (req: Request, res: Response) => {
  const newTodo = req.body;

  res.status(201).json(newTodo);
};
export const updateTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedTodo = req.body;

  res.json({
    id: id,
    title: updatedTodo.title,
    completed: updatedTodo.completed
  });
};
export const deleteTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  res.json({
    message: `Todo ${id} silindi`
  });
};