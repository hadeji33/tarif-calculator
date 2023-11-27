import { FC, memo, useEffect } from "react";

import style from "./App.module.css";
import TariffForm from "./Components/TariffForm";
import { useAppDispatch } from "./Store/hooks";
import {
  FormInitialState,
  startLoading,
  loadingSuccess,
} from "./Store/formReducer";

async function fetchInit() {
  return new Promise<Partial<FormInitialState["data"]>>((resolve) => {
    setTimeout(() => {
      resolve({
        minutes: 300,
        sms: 100,
        internet: 10,
        wifi: "rent",
        socials: {
          ok: true,
          vk: false,
          facebook: false,
          instagram: false,
          tiktok: false,
        },
      });
    }, 1000);
  });
}

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startLoading());

    fetchInit().then((data) => {
      dispatch(loadingSuccess(data));
    });
  }, [dispatch]);

  return (
    <div className={style.root}>
      <TariffForm className={style.form} />
    </div>
  );
};

export default memo(App);
