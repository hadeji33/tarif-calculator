import { HTMLAttributes, FC, memo } from "react";

interface RadioProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
}

const Radio: FC<RadioProps> = (props) => {
  const { label, ...restProps } = props;
  return (
    <div>
      <input {...restProps} type="radio" />
      <div>{label}</div>
    </div>
  );
};

export default memo(Radio);
