export const getAllTodos = () => {
  return [
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
  ];
};
export const createTodo = (todo: any) => {
  return todo;
};
export const updateTodo = (id: number, todo: any) => {
  return {
    id: id,
    title: todo.title,
    completed: todo.completed
  };
};
export const deleteTodo = (id: number) => {
  return {
    message: `Todo ${id} silindi`
  };
};