import { ReactNode } from 'react';

interface SubmitButtonProps {
  icon: ReactNode;
  text: string;
}

export const SubmitButton = ({ icon, text }: SubmitButtonProps) => {
  return (
    <button
      className="btn btn-primary text-lg font-bold normal-case"
      type="submit"
    >
      {icon}
      {text}
    </button>
  );
};
