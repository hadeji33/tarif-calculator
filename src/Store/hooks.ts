import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFormSelector = () =>
  useSelector((state: RootState) => state.form);
export const useFormSumSelector = () => {
  const { data } = useFormSelector();
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
    socials: {
      facebook: 20,
      vk: 20,
      ok: 20,
      instagram: 60,
      tiktok: 60,
    },
  };

  let sum =
    priceConfig.minutes[data.minutes] +
    priceConfig.sms[data.sms] +
    priceConfig.internet[data.internet] +
    priceConfig.operator[data.operator] +
    priceConfig.router[data.wifi];

  if (data.socials.facebook) sum += priceConfig.socials.facebook;
  if (data.socials.vk) sum += priceConfig.socials.vk;
  if (data.socials.ok) sum += priceConfig.socials.ok;
  if (data.socials.instagram) sum += priceConfig.socials.instagram;
  if (data.socials.tiktok) sum += priceConfig.socials.tiktok;

  return sum;
};
