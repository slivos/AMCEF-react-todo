import { useAtom } from 'jotai';
import { filterTodo } from '../hooks/states';

export const Filter = () => {
  const [filter, setFilter] = useAtom(filterTodo);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <select
      className="select border-2 border-accent w-full focus:outline-none focus:border-warning font-bold text-base"
      defaultValue={'default'}
      onChange={handleChange}
    >
      <option disabled value={'default'}>
        Filtrovať položky:
      </option>
      <option value={'all'}>Všetky</option>
      <option value={'active'}>Aktívne</option>
      <option value={'completed'}>Dokončené</option>
    </select>
  );
};
