import { HTMLAttributes, FC, memo, useState, useCallback } from "react";
import cn from "classnames";

import Form from "../UI/Form";
import FormItem from "../UI/FormItem";
import Select from "../UI/Select";
import RangeSelect from "../UI/RangeSelect";
import Button from "../UI/Button";
import InputPhone from "../UI/InputPhone";
import CheckBox from "../UI/CheckBox";
import SocialItem from "./elements/SocialItem";
import {
  editPhone,
  editOperator,
  editMinutes,
  editSms,
  editInternet,
  editWifi,
  editSocials,
} from "../../Store/formReducer";
import {
  useAppDispatch,
  useFormSelector,
  useFormSumSelector,
} from "../../Store/hooks";
import style from "./TariffForm.module.css";

interface TariffFormProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function validatePhone(phone: string): string | undefined {
  if (!phone) {
    return "Поле обязательно для заполнения";
  }

  if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
    return "Неверный формат";
  }
}

const TariffForm: FC<TariffFormProps> = (props) => {
  const { className, ...restProps } = props;
  const dispatch = useAppDispatch();
  const { loading, data } = useFormSelector();
  const sum = useFormSumSelector();
  const [phoneError, setPhoneError] = useState<string>();

  const handleSubmit = useCallback(() => {
    alert(JSON.stringify({ ...data, sum }, null, 2));
  }, [data, sum]);

  if (loading) {
    return <div {...restProps}>Загрузка...</div>;
  }

  return (
    <div {...restProps} className={cn(style.form, className)}>
      <Form onSubmit={handleSubmit}>
        <div className={style.heading}>Настройте тариф</div>

        <FormItem label="Телефон">
          <InputPhone
            name="phone"
            placeholder="+7 (____) ___-__-__"
            mask="+7 (999) 999-99-99"
            className={style.input}
            onChange={(e) => {
              dispatch(editPhone(e.target.value));
              setPhoneError(validatePhone(e.target.value));
            }}
            value={data.phone}
            error={phoneError}
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
            value={data.operator}
            className={style.input}
            onChange={(e) => {
              dispatch(editOperator(e.target.value));
            }}
          />
        </FormItem>

        <FormItem label="Минуты">
          <RangeSelect
            min={200}
            max={600}
            step={100}
            name="minutes"
            onChange={(e) => dispatch(editMinutes(+e.target.value))}
            value={data.minutes}
          />
        </FormItem>

        <FormItem label="CМС">
          <RangeSelect
            min={0}
            max={150}
            step={50}
            name="sms"
            onChange={(e) => dispatch(editSms(+e.target.value))}
            value={data.sms}
          />
        </FormItem>

        <FormItem label="Интернет">
          <RangeSelect
            min={5}
            max={25}
            step={5}
            name="internet"
            onChange={(e) => dispatch(editInternet(+e.target.value))}
            value={data.internet}
          />
        </FormItem>

        <FormItem label="Wi-Fi роутер">
          <CheckBox
            name="router"
            value="rent"
            label="Аренда 99 ₽/мес."
            checked={data.wifi === "rent"}
            onClick={() => dispatch(editWifi("rent"))}
          />
          <CheckBox
            name="router"
            value="buy"
            label="Выкупить 2 600 ₽"
            checked={data.wifi === "buy"}
            onClick={() => dispatch(editWifi("buy"))}
          />
        </FormItem>

        <FormItem label="Соцсети">
          <div className={style.socials}>
            <SocialItem
              mode="facebook"
              label="20 ₽"
              name="facebook"
              onClick={() => dispatch(editSocials("facebook"))}
              checked={data.socials.facebook}
            />
            <SocialItem
              mode="vk"
              label="20 ₽"
              name="vk"
              onClick={() => dispatch(editSocials("vk"))}
              checked={data.socials.vk}
            />
            <SocialItem
              mode="ok"
              label="20 ₽"
              name="ok"
              onClick={() => dispatch(editSocials("ok"))}
              checked={data.socials.ok}
            />
            <SocialItem
              mode="instagram"
              label="60 ₽"
              name="instagram"
              onClick={() => dispatch(editSocials("instagram"))}
              checked={data.socials.instagram}
            />
            <SocialItem
              mode="tiktok"
              label="60 ₽"
              name="tiktok"
              onClick={() => dispatch(editSocials("tiktok"))}
              checked={data.socials.tiktok}
            />
          </div>
        </FormItem>

        <FormItem>
          <Button type="submit">
            <i>{sum} ₽</i> в месяц
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default memo(TariffForm);
