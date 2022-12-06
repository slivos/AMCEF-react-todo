import { useAtom } from 'jotai';
import { searchTodo } from '../hooks/states';

export const Search = () => {
  const [search, setSearch] = useAtom(searchTodo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Hľadať podľa nadpisu, obsahu..."
      className="input border-2 border-accent w-full focus:outline-none focus:border-warning font-bold"
      value={search}
      onChange={handleChange}
    />
  );
};
