import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";

import { useButton } from '@mui/base/useButton';
import style from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  const { getRootProps } = useButton(restProps);

  return (
    <button {...getRootProps()} className={cn(style.button, className)}>
      {children}
    </button>
  );
};

export default memo(Button);
