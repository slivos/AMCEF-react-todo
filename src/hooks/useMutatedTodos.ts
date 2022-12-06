import { useMutation, useQueryClient } from '@tanstack/react-query';
import useTodos from '../hooks/useTodos';
import { toast } from 'react-toastify';

const useMutatedTodos = () => {
  const { deleteTodo, completeTodo } = useTodos();
  const queryClient = useQueryClient();
  const onDeleteNotify = () => toast.success('Úspešne odstránené!');

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const completeMutation = useMutation({
    mutationFn: completeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return { deleteMutation, completeMutation, onDeleteNotify };
};

export default useMutatedTodos;
