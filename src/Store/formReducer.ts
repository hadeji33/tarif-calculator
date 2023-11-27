import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SocialType = "facebook" | "vk" | "ok" | "instagram" | ("tiktok" & string);

interface FormValues {
  phone: string;
  operator: string;
  minutes: number;
  sms: number;
  internet: number;
  wifi: "rent" | "buy";
  socials: Record<SocialType, boolean>;
}

export interface FormInitialState {
  loading: boolean;
  data: FormValues;
}
const initialState: FormInitialState = {
  loading: false,
  data: {
    phone: "",
    operator: "1",
    minutes: 300,
    sms: 100,
    internet: 10,
    wifi: "rent",
    socials: {
      facebook: false,
      vk: false,
      ok: false,
      instagram: false,
      tiktok: false,
    },
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    startLoading: (state) => {
      return { ...state, loading: true };
    },
    loadingSuccess: (state, action: PayloadAction<Partial<FormValues>>) => {
      return { ...state, data: { ...state.data, ...action.payload }, loading: false };
    },
    editPhone: (state, action: PayloadAction<string>) => {
      state.data.phone = action.payload;
    },
    editOperator: (state, action: PayloadAction<string>) => {
      state.data.operator = action.payload;
    },
    editMinutes: (state, action: PayloadAction<number>) => {
      state.data.minutes = action.payload;
    },
    editSms: (state, action: PayloadAction<number>) => {
      state.data.sms = action.payload;
    },
    editInternet: (state, action: PayloadAction<number>) => {
      state.data.internet = action.payload;
    },
    editWifi: (state, action: PayloadAction<"rent" | "buy">) => {
      state.data.wifi = action.payload;
    },
    editSocials: (state, action: PayloadAction<SocialType>) => {
      state.data.socials[action.payload] = !state.data.socials[action.payload];
    },
  },
});

export const {
  startLoading,
  loadingSuccess,
  editPhone,
  editOperator,
  editMinutes,
  editSms,
  editInternet,
  editWifi,
  editSocials,
} = formSlice.actions;

export default formSlice.reducer;
