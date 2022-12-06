import { Link } from 'react-router-dom';
import { ITodos } from '../../api/datatypes';
import { HiX, HiCheck } from 'react-icons/hi';
import { dateFormat } from '../../utilities/dateFormat';
import { Card } from '../Base/Card';
import { Badge } from '../Badge';
import { Button } from './Button';
import useMutatedTodos from '../../hooks/useMutatedTodos';

export interface TodoProps {
  todo: ITodos;
}

export const Todo = ({ todo }: TodoProps) => {
  const { deleteMutation, completeMutation, onDeleteNotify } =
    useMutatedTodos();

  const handleDelete = () => {
    deleteMutation.mutate(todo);
    onDeleteNotify();
  };

  const handleComplete = () => {
    completeMutation.mutate({ id: todo.id, is_completed: true });
  };

  const lineThrough = () => {
    return todo.is_completed ? 'line-through' : '';
  };

  return (
    <Card classes="w-full bg-primary text-primary-content flex my-4 border-4 border-accent relative transition ease-in-out delay-100 hover:-translate-y-1">
      <Badge todo={todo} />
      <Link to={`/todos/${todo.id}`}>
        <div className="card-body px-5 sm:px-8 py-5 sm:py-10 flex-col justify-center items-start sm:items-center sm:flex-row sm:justify-between">
          <div className="flex flex-col">
            <span
              className={`card-title text-warning text-xl font-bold pt-2 sm:pt-0 ${lineThrough()}`}
            >
              {todo.title}
            </span>
            <p className={`font-semibold break-all ${lineThrough()}`}>
              {todo.text}
            </p>
          </div>
          <div className="flex flex-col self-end text-right min-w-fit sm:pr-5">
            <div className={`text-aqua font-bold ${lineThrough()}`}>
              {dateFormat(todo.date)}
            </div>
            <div className={`font-bold ${lineThrough()}`}>{todo.time}</div>
          </div>
        </div>
      </Link>
      <div className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 m-auto mb-3 sm:mb-0 sm:mr-3 flex flex-row sm:flex-col items-end sm:items-center justify-center gap-2">
        <Button
          classes="btn-error"
          tooltip="Odstrániť"
          handler={handleDelete}
          icon={<HiX className="text-black text-xl m-auto" />}
        />
        <Button
          classes="btn-success"
          tooltip="Hotovo"
          handler={handleComplete}
          icon={<HiCheck className="text-black text-xl m-auto" />}
        />
      </div>
    </Card>
  );
};
