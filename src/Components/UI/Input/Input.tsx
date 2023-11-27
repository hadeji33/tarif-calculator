import { InputHTMLAttributes, memo, forwardRef } from "react";
import cn from "classnames";

import style from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  cnContainer?: string;
  after?: string;
  error?: string;
}

const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { className, error, after, ...restProps } = props;
  return (
    <div className={style.root}>
      <div className={cn(style.inputContainer, { [style.error]: !!error })}>
        <input
          {...restProps}
          className={cn(style.input, className, {
            [style.error]: !!error,
          })}
        />
      </div>
      {error && (
        <div className={cn(style.info, style.errorMessage)}>{error}</div>
      )}
      {after && <div className={style.info}>{after}</div>}
    </div>
  );
});

export default memo(Input);
