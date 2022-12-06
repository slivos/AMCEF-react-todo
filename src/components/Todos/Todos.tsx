import { Todo } from '../Todo/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TodosProps {
  todos: {}[];
}

export const Todos = ({ todos }: TodosProps) => {
  return (
    <>
      {todos?.map((todo: any) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <ToastContainer position="bottom-center" theme="colored" />
    </>
  );
};
