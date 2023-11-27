import { useOption } from "@mui/base/useOption";
import { FC, OptionHTMLAttributes, memo } from "react";

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
}

const Option: FC<OptionProps> = (props) => {
  const { children, value, className, disabled = false } = props;
  const { getRootProps } = useOption({
    value,
    disabled,
    label: children,
  });

  return <option {...getRootProps()} className={className} />;
};

export default memo(Option);
