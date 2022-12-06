const useFilterTodos = (
  todos: [],
  searchValue: string,
  filterValue: string
) => {
  const filteredTodos: {}[] = todos?.filter((todo: any) => {
    if (!searchValue && !filterValue) {
      return todos;
    } else if (filterValue === 'completed') {
      return todo.is_completed === true;
    } else if (filterValue === 'active') {
      return todo.is_completed === false;
    } else if (searchValue || filterValue) {
      return (
        todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        todo.text.toLowerCase().includes(searchValue.toLowerCase()) ||
        todo.date.toLowerCase().includes(searchValue.toLowerCase()) ||
        todo.time.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  });

  return { filteredTodos };
};

export default useFilterTodos;
