import { FC, memo } from "react";

import style from "./App.module.css";
import TariffForm from "./Components/TariffForm/TariffForm";

const priceConfig: Record<string, Record<string, number>> = {
  router: {
    rent: 99,
    buy: 0,
  },
  operator: {
    1: 40,
    2: 80,
    3: 90,
  },
  minutes: {
    200: 20,
    300: 30,
    400: 40,
    500: 50,
    600: 60,
  },
  sms: {
    0: 20,
    50: 30,
    100: 50,
    150: 70,
  },
  internet: {
    5: 20,
    10: 30,
    15: 50,
    20: 65,
    25: 70,
  },
  facebook: {
    on: 20,
  },
  vk: {
    on: 20,
  },
  ok: {
    on: 20,
  },
  instagram: {
    on: 20,
  },
  tiktok: {
    on: 20,
  },
};

const App: FC = () => {
  return (
    <div className={style.root}>
      <TariffForm className={style.form} priceConfig={priceConfig} />
    </div>
  );
};

export default memo(App);
