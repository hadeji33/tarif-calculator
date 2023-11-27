import { FC, memo, InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
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
