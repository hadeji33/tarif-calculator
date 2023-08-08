import React, { HTMLAttributes, FC, memo } from "react";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: SelectOption[];
  name?: string;
}

const Select: FC<SelectProps> = (props) => {
  const { options, ...restProps } = props;
  return (
    <select {...restProps}>
      {options &&
        options.map((item) => <option value={item.value}>{item.text}</option>)}
    </select>
  );
};

export default memo(Select);
