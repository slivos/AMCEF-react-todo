import React, { ReactNode } from 'react';

interface ButtonProps {
  classes: string;
  tooltip: string;
  handler: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactNode;
}

export const Button = ({ classes, tooltip, handler, icon }: ButtonProps) => {
  return (
    <button
      className={`${classes} btn btn-square btn-xs tooltip tooltip-right`}
      data-tip={tooltip}
      onClick={handler}
    >
      {icon}
    </button>
  );
};
