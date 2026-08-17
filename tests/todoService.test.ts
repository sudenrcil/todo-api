import { describe, it, expect } from "vitest";
import { getAllTodos, 
    createTodo, 
    updateTodo,
    deleteTodo
 } from "../src/services/todoService.js";

describe("Todo Service", () => {
  it("todo listesini getirmeli", () => {
    const todos = getAllTodos();

    expect(todos).toHaveLength(2);
    expect(todos[0].title).toBe("TypeScript öğren");
  });
  it("yeni todo oluşturmalı", () => {
  const todo = {
    id: 3,
    title: "Backend öğren",
    completed: false
  };

  const result = createTodo(todo);

  expect(result).toEqual(todo);
});
it("todo güncellemeli", () => {
  const todo = {
    id: 1,
    title: "TypeScript ileri seviye",
    completed: true
  };

  const result = updateTodo(1, todo);

  expect(result).toEqual(todo);
});
it("todo silmeli", () => {
  const result = deleteTodo(2);

  expect(result).toEqual({
    message: "Todo 2 silindi"
  });
});
});