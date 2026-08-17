import {
  getAllTodos,
  createTodo as createTodoService,
  updateTodo as updateTodoService
} from "../services/todoService.js";
import type { Request, Response } from "express";
import type { Todo } from "../domain/todo.js";

export const getTodos = (req: Request, res: Response) => {
  const todos = getAllTodos();

  res.json(todos);
};
export const createTodo = (req: Request, res: Response) => {
  const newTodo: Todo = createTodoService(req.body);

  res.status(201).json(newTodo);
};
export const updateTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedTodo: Todo = updateTodoService(id, req.body);

  res.json(updatedTodo);
};
export const deleteTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  res.json({
    message: `Todo ${id} silindi`
  });
};