import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface keyPad {
  amount: String;
}

const initialState: keyPad = {
  amount: "",
};
const keyPadSlice = createSlice({
  name: "keyPad",
  initialState,
  reducers: {
    addkey: (state, action: PayloadAction<String>) => {
      if (!action.payload) {
        state.amount = "";
        return;
      } else if (action.payload === "<-") {
        state.amount = state.amount.substring(0, state.amount.length - 1);
        return;
      }
      state.amount = state.amount.toString() + action.payload.toString();
    },
  },
});
export const { addkey } = keyPadSlice.actions;
export default keyPadSlice.reducer;
