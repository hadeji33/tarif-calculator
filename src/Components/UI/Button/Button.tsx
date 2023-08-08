import { HTMLAttributes, FC, memo } from "react";
import cn from "classnames";

import style from './Button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <button {...restProps} className={cn(style.button, className)}>
      {children}
    </button>
  );
};

export default memo(Button);
