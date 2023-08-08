import { HTMLAttributes, FC, memo } from "react";
import cn from "classnames";

import style from "./FormItem.module.css";

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
}

const FormItem: FC<FormItemProps> = (props) => {
  const { children, label, className, ...restProps } = props;
  return (
    <div {...restProps} className={cn(style.root, className)}>
      {label && <div className={style.label}>{label}</div>}
      {children}
    </div>
  );
};

export default memo(FormItem);
