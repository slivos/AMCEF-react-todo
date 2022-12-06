import client from '../api/api_instance';
import { ITodos } from '../api/datatypes';
import { IFormInputs } from '../components/Todos/AddForm';

const useTodos = () => {
  const getTodos = async () => {
    return client.get('/todos');
  };

  const getTodo = async (id: string | undefined) => {
    return client.get(`/todos/${id}`);
  };

  const addTodo = async (data: IFormInputs) => {
    return client.post('/todos', data);
  };

  const deleteTodo = async (todo: ITodos) => {
    return client.delete(`/todos/${todo.id}`);
  };

  const completeTodo = async (todo: Partial<ITodos>) => {
    return client.put(`/todos/${todo.id}`, { is_completed: todo.is_completed });
  };

  return { getTodos, getTodo, addTodo, deleteTodo, completeTodo };
};

export default useTodos;
