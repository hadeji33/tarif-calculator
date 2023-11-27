import { FC, memo, SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  className?: string;
}

const Select: FC<SelectProps> = (props) => {
  const { options, ...restProps } = props;

  return (
    <select {...restProps}>
      {options &&
        options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
    </select>
  );
};

export default memo(Select);
