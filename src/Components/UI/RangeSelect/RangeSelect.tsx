import { HTMLAttributes, FC, memo, useMemo } from "react";
import cn from "classnames";

import style from "./RangeSelect.module.css";

interface RangeSelectProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  name?: string;
}

const RangeSelect: FC<RangeSelectProps> = (props) => {
  const { min = 0, max = 0, step = 1, value, className, ...restProps } = props;

  const steps = useMemo(() => {
    const steps = [];

    for (let i = min; i <= max; i+= step) {
      steps.push(i);
    }

    return steps;
  }, [max, min, step]);

  return (
    <>
      <input
        {...restProps}
        className={cn(style.input, className)}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <div className={style.steps}>
        {steps.map((step) => (
          <div key={step}>{step}</div>
        ))}
      </div>
    </>
  );
};

export default memo(RangeSelect);
