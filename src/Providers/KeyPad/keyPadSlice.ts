import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface keyPad {
  amount: number;
}

const initialState: keyPad = {
  amount: 0,
};
const keyPadSlice = createSlice({
  name: "keyPad",
  initialState,
  reducers: {
    addkey: (state, action: PayloadAction<number>) => {
      if (action.payload===0) {
        state.amount = 0;
        return;
      } else if (action.payload.toString() === "<-") {
        state.amount = +state.amount
          .toString()
          .substring(0, state.amount.toString().length - 1);
        return;
      }
      state.amount = +"" + +state.amount + action.payload;
      if (+((state.amount / 1000) * 10).toFixed(2) > 100000) {
        state.amount = +state.amount
          .toString()
          .substring(0, state.amount.toString().length - 1);
        toast.error("The amount should be between 1 to 100,000");
      }
    },
  },
});
export const { addkey } = keyPadSlice.actions;
export default keyPadSlice.reducer;
