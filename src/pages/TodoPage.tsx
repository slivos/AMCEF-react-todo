import { useParams } from 'react-router-dom';
import { TodoDetail } from '../components/TodoDetail/TodoDetail';
import { useQuery } from '@tanstack/react-query';
import useTodos from '../hooks/useTodos';
import { ArrowHome } from '../components/ArrowHome';

export const TodoPage = () => {
  const { id } = useParams();
  const { getTodo } = useTodos();
  const { data: todo, isLoading } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodo(id),
  });

  return (
    <div className="flex flex-col items-center p-2 w-full">
      <ArrowHome route="/todos" classes="ml-1" />
      <div className="flex flex-col sm:flex-row justify-between items-center w-5/6">
        {!isLoading ? <TodoDetail todo={todo?.data} /> : null}
      </div>
    </div>
  );
};
