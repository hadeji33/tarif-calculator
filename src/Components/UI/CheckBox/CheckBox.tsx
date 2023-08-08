import { HTMLAttributes, FC, memo } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  name?: string;
  checked?: boolean;
}

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { label, ...restProps } = props;
  return (
    <div>
      <input {...restProps} type="checkbox" />
      <div>{label}</div>
    </div>
  );
};

export default memo(CheckBox);
