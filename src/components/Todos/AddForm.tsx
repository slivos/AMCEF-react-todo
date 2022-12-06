import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useTodos from '../../hooks/useTodos';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { SubmitButton } from './SubmitButton';

export interface IFormInputs {
  title: string;
  text: string;
  date: string;
  time: string;
}

const schema = yup.object({
  title: yup.string().required('Toto pole je povinné'),
  text: yup.string(),
  date: yup.string().required('Toto pole je povinné'),
  time: yup.string().required('Toto pole je povinné'),
});

export const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const { addTodo } = useTodos();
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const onSubmit = (data: IFormInputs) => {
    addMutation.mutate(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ title: '', text: '', date: '', time: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 grid gap-6 mb-9">
      <div className="form-control relative">
        <label className="label">
          <span className="label-text text-base-content font-bold text-lg">
            Nadpis
          </span>
        </label>
        <input
          type={'text'}
          {...register('title')}
          className="input border-2 border-react-blue w-full focus:outline-none focus:border-warning caret-warning text-warning font-bold"
          placeholder="Dnes sa vyberiem ..."
        />
        <p className="text-red-500 absolute bottom-0 left-0 translate-y-6">
          {errors.title?.message}
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text text-base-content font-bold text-lg">
              Dátum
            </span>
          </label>
          <input
            type={'date'}
            {...register('date')}
            className="input border-2 border-react-blue w-full focus:outline-none focus:border-warning text-warning font-bold"
          />
          <p className="text-red-500 absolute bottom-0 left-0 translate-y-6">
            {errors.date?.message}
          </p>
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text text-base-content font-bold text-lg">
              Čas
            </span>
          </label>
          <input
            type={'time'}
            {...register('time')}
            className="input border-2 border-react-blue w-full focus:outline-none focus:border-warning text-warning font-bold"
          />
          <p className="text-red-500 absolute bottom-0 left-0 translate-y-6">
            {errors.time?.message}
          </p>
        </div>
      </div>
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content font-bold text-lg">
              Text
            </span>
          </label>
          <textarea
            className="textarea border-react-blue border-2 focus:outline-none focus:border-warning caret-warning text-warning font-bold text-base"
            {...register('text')}
          ></textarea>
        </div>
      </div>
      <SubmitButton
        icon={<HiOutlinePlusSm className="text-3xl mr-1" />}
        text="Pridať"
      />
    </form>
  );
};
