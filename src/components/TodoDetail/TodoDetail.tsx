import { Badge } from '../Badge';
import { Card } from '../Base/Card';
import { TodoProps } from '../Todo/Todo';

export const TodoDetail = ({ todo }: TodoProps) => {
  return (
    <Card classes="w-full bg-primary my-5">
      <Badge todo={todo} classes="text-lg p-3 m-3" />
      <div className="card-body flex flex-col lg:flex-row justify-center gap-5 pt-10">
        <div className="w-full">
          <label className="label pb-0">
            <span className="label-text text-lg font-semibold">Nadpis</span>
          </label>
          <div className="card-title text-warning text-2xl font-bold">
            {todo.title}
          </div>
          <label className="label pb-0">
            <span className="label-text text-lg font-semibold">Text</span>
          </label>
          <div className="card-title text-primary-content text-xl font-bold">
            {todo.text}
          </div>
        </div>
        <div className="w-full flex flex-col items-end">
          <label className="label pb-0">
            <span className="label-text text-lg font-semibold">Dátum</span>
          </label>
          <div className="card-title text-warning text-2xl font-bold">
            {todo.date}
          </div>
          <label className="label pb-0">
            <span className="label-text text-lg font-semibold">Čas</span>
          </label>
          <div className="card-title text-primary-content text-xl font-bold">
            {todo.time}
          </div>
        </div>
      </div>
    </Card>
  );
};
