import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AssessoirsType,
  CostumesType,
} from "../types";
import axios from "axios";

export const getOneAccount = createAsyncThunk(
  "accounts/getOneAccount",
  async (id: string) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/accounts/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUserCostumes = createAsyncThunk(
  "account/getUserCostumes",
  async (accountId: string) => {
    try {
      const { data } = await axios.get("http://localhost:8000/userCostumes");

      const filteredData = data.filter((costume: CostumesType) => {
        return costume.bigAuthor === accountId;
      });
      console.log("Отфильтрованные данные:", filteredData);
      return filteredData;
    } catch (error) {
      console.log("Ошибка при получении данных:", error);
    }
  }
);

export const getUserAss = createAsyncThunk(
  "account/getUserAss",
  async (accountId: string) => {
    try {
      const { data } = await axios.get("http://localhost:8000/userAssesoirs");

      const filteredData = data.filter((ass: AssessoirsType) => {
        return ass.bigAuthor === accountId;
      });
      console.log("Отфильтрованные акссессуары:", filteredData);
      return filteredData;
    } catch (error) {
      console.log("Ошибка при получении данных:", error);
    }
  }
);
