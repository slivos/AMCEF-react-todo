import { AddForm } from '../components/Todos/AddForm';
import { Search } from '../components/Search';
import { Filter } from '../components/Filter';
import { Todos } from '../components/Todos/Todos';
import { ArrowHome } from '../components/ArrowHome';
import { useQuery } from '@tanstack/react-query';
import useTodos from '../hooks/useTodos';
import { useAtom } from 'jotai';
import { filterTodo, searchTodo } from '../hooks/states';
import useFilterTodos from '../hooks/useFilterTodos';

export const TodosPage = () => {
  const { getTodos } = useTodos();
  const { data: todos } = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  const [searchValue] = useAtom(searchTodo);
  const [filterValue] = useAtom(filterTodo);

  const { filteredTodos } = useFilterTodos(
    todos?.data,
    searchValue,
    filterValue
  );

  return (
    <div className="flex flex-col items-center p-2 w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center w-5/6">
        <ArrowHome route="/" classes="hidden sm:flex" />
        <div className="sm:-ml-0.5">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-react-blue to-violet-500 p-2 sm:pr-8 mb-4 m-auto text-center">
            To-Do zoznam
          </h1>
        </div>
        <ArrowHome route="/" classes="sm:hidden" />
      </div>
      <div className="flex self-center divider w-5/6"></div>
      <AddForm />
      <div className="flex self-center divider w-5/6"></div>
      <div className="w-5/6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 w-full lg:h-24 my-10 lg:my-10">
          <div className="w-full">
            <Search />
          </div>
          <div className="divider lg:divider-horizontal">ALEBO</div>
          <div className="w-full">
            <Filter />
          </div>
        </div>
        <Todos todos={filteredTodos?.reverse()} />
      </div>
    </div>
  );
};
