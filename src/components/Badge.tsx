import { TodoProps } from './Todo/Todo';

interface BadgeProps extends TodoProps {
  classes?: string;
}

export const Badge = ({ todo, classes }: BadgeProps) => {
  return (
    <>
      {todo.is_completed ? (
        <div
          className={`${classes} badge badge-success absolute top-0 right-0 sm:left-0 m-2 font-bold`}
        >
          Hotovo
        </div>
      ) : null}
    </>
  );
};
