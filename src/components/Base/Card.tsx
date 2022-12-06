import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  classes: string;
}

export const Card = ({ children, classes }: CardProps) => {
  return <div className={`card ${classes}`}>{children}</div>;
};
