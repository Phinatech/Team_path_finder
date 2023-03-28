import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
// import { UserData } from "../AllInterfaces";
import { UserData } from "../Alllnterface";
import { WalletData } from "../Alllnterface";
import { BackToSchool } from "../Alllnterface";
const initialState = {
	currentUser: {} as UserData | null,
	backtoschool: {} as BackToSchool | null,
    wallet:{} as WalletData  | any
};

const ReduxState = createSlice({
	name: "alajo",
	initialState,
	reducers: {
		login: (state, { payload }: PayloadAction<UserData>) => {
			state.currentUser = payload;
		},
        wallet:(state,{payload}:PayloadAction<WalletData>)=>{
            state.wallet = payload;
        },
        backtoSchool:(state,{payload}:PayloadAction<BackToSchool>)=>{
            state.backtoschool = payload;
        },
		logout: (state) => {
			state.currentUser = null;
		},
	},
});

export const { login,wallet,backtoSchool } = ReduxState.actions;

export default ReduxState.reducer;
