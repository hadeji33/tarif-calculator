import {
  FC,
  memo,
  useEffect,
  useRef,
} from "react";
import Input, { InputProps } from "../Input";

interface InputPhoneProps extends InputProps {
  mask: string;
}

const InputPhone: FC<InputPhoneProps> = (props) => {
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // mask initialization
  }, [inputRef]);

  return <Input {...props} ref={inputRef} />;
};

export default memo(InputPhone);
