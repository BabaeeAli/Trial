import { configureStore } from "@reduxjs/toolkit";
import GivenSlice from "./Given/givenSlice";
import PaySlice from "./Pay/paySlice";
import keyPadSlice from "./KeyPad/keyPadSlice";
import keySlice from "./keyHandler/keyHandler";

export const store = configureStore({
  reducer: {
    onPays: PaySlice,
    ongivens: GivenSlice,
    onkeyPads: keyPadSlice,
    onEnter:keySlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
