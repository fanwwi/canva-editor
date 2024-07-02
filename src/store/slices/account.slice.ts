import { createSlice } from "@reduxjs/toolkit";
import {
  AccountType,
  AssessoirsType,
  CostumesType,
} from "../types";
import {
  getOneAccount,
  getUserAss,
  getUserCostumes,
} from "../actions/account.action";

type StatesType = {
  error: null | string;
  loading: boolean;
  account: AccountType | null;
  userCostumes: CostumesType[] | null;
  userAss: AssessoirsType[] | null;
};

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  account: null,
  userCostumes: null,
  userAss: null,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload;
      })
      .addCase(getOneAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка при загрузки аккаунтa";
      })
      .addCase(getOneAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserCostumes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCostumes.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.userCostumes = payload;
      })
      .addCase(getUserCostumes.rejected, (state) => {
        state.loading = false;
        console.log(state.error);
      })
      .addCase(getUserAss.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAss.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.userAss = payload;
      })
      .addCase(getUserAss.rejected, (state) => {
        state.loading = false;
        console.log(state.error);
      });
  },
});

export default accountsSlice.reducer;
