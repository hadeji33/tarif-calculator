import {
  FormHTMLAttributes,
  FC,
  memo,
  useRef,
  useCallback,
  FormEvent,
} from "react";

function transformFormDataToObject(formData: FormData) {
  const result: Record<string, any> = {};

  formData.forEach((value, key) => {
    // схлопываем дублирующиеся поля в массив
    const prev = result[key];
    if (prev !== undefined) {
      result[key] = Array.isArray(prev) ? [...prev, value] : [prev, value];
      return;
    }

    result[key] = value;
  });

  return result;
}

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onChange" | "onSubmit"> {
  className?: string;
  onChange?: (e: FormEvent<HTMLFormElement>, data: unknown) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>, data: unknown) => void;
}

const Form: FC<FormProps> = (props) => {
  const { children, onChange, onSubmit, ...restProps } = props;
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const data = transformFormDataToObject(formData);
        if (onChange) onChange(e, data);
      }
    },
    [onChange]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const data = transformFormDataToObject(formData);
        if (onSubmit) onSubmit(e, data);
      }
    },
    [onSubmit]
  );

  return (
    <form
      {...restProps}
      onChange={handleChange}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default memo(Form);
