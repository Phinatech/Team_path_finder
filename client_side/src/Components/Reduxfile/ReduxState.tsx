import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../Alllnterface";

const initialState = {
  currentUser: {} as UserData | null,
};

const ReduxState = createSlice({
  name: "Alajo app",
  initialState,
  reducers: {
    User: (state, { payload }: PayloadAction<UserData>) => {
      state.currentUser = payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { User, logout } = ReduxState.actions;

export default ReduxState.reducer;
