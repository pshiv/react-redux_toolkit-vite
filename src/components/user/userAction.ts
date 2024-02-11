import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

export const fetchUserById = createAsyncThunk(
  "userDetails/fetchUserById",
  async (userId: number) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.data);
  }
);
