import { HTMLAttributes, FC, memo } from "react";
import cn from "classnames";

import style from "./Input.module.css";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  name?: string;
  after?: string;
  error?: string;
}

const Input: FC<InputProps> = (props) => {
  const { className, error, after, ...restProps } = props;
  return (
    <div className={style.root}>
      <input
        {...restProps}
        className={cn(style.input, className, {
          [style.error]: !!error,
        })}
      />
      {error && <div className={cn(style.info, style.errorMessage)}>{error}</div>}
      {after && <div className={style.info}>{after}</div>}
    </div>
  );
};

export default memo(Input);
