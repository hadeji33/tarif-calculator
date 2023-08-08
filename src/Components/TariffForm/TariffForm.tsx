import {
  HTMLAttributes,
  FC,
  memo,
  useState,
  useCallback,
  FormEvent,
} from "react";
import cn from "classnames";

import style from "./TariffForm.module.css";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import FormItem from "../UI/FormItem/FormItem";
import Select from "../UI/Select/Select";
import RangeSelect from "../UI/RangeSelect/RangeSelect";
import Button from "../UI/Button/Button";
import Radio from "../UI/Radio/Radio";
import SocialItem from "./elements/SocialItem/SocialItem";

interface TariffFormProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  priceConfig: Record<string, Record<string, number>>;
}

const TariffForm: FC<TariffFormProps> = (props) => {
  const { className, priceConfig, ...restProps } = props;
  const [sum, setSum] = useState(0);

  const handleFormChange = useCallback(
    (e: FormEvent<HTMLFormElement>, data: any) => {
      const sum = Object.keys(data).reduce((prev, key) => {
        const value = data[key];

        if (typeof priceConfig[key] === "object" && value in priceConfig[key]) {
          console.log(priceConfig[key][value]);
          const price = priceConfig[key][value];
          return prev + price;
        }

        return prev;
      }, 0);

      setSum(sum);
    },
    [priceConfig]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>, data: any) => {
      alert(JSON.stringify(data));
    },
    []
  );

  return (
    <div {...restProps} className={cn(style.form, className)}>
      <Form onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className={style.heading}>Настройте тариф</div>

        <FormItem label="Телефон">
          <Input
            name="phone"
            placeholder="+7 (____) ___-__-__"
            after="Обязательное поле"
          />
        </FormItem>

        <FormItem label="Оператор">
          <Select
            name="operator"
            options={[
              { value: "1", text: "Оператор 1" },
              { value: "2", text: "Оператор 2" },
              { value: "3", text: "Оператор 3" },
            ]}
          />
        </FormItem>

        <FormItem label="Минуты">
          <RangeSelect min={200} max={600} step={100} name="minutes" />
        </FormItem>

        <FormItem label="CМС">
          <RangeSelect min={0} max={150} step={50} name="sms" />
        </FormItem>

        <FormItem label="Интернет">
          <RangeSelect min={5} max={25} step={5} name="internet" />
        </FormItem>

        <FormItem label="Wi-Fi роутер">
          <Radio name="router" value="rent" label="Аренда 99 ₽/мес." checked />
          <Radio name="router" value="buy" label="Выкупить 2 600 ₽" />
        </FormItem>

        <FormItem label="Соцсети">
          <div className={style.socials}>
            <SocialItem mode="facebook" label="20 ₽" name="facebook" />
            <SocialItem mode="vk" label="20 ₽" name="vk" />
            <SocialItem mode="ok" label="20 ₽" name="ok" />
            <SocialItem mode="instagram" label="60 ₽" name="instagram" />
            <SocialItem mode="tiktok" label="60 ₽" name="tiktok" />
          </div>
        </FormItem>

        <FormItem>
          <Button>
            <i>{sum} ₽</i> в месяц
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default memo(TariffForm);
