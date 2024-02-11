import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserById } from "./userAction";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserDetails = {
  loading: boolean;
  error: string;
  isData: boolean;
  user: User;
};

const initialState: UserDetails = {
  loading: true,
  isData: false,
  error: "",
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
  },
};

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
      state.isData = false;
    });
    builder.addCase(
      fetchUserById.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.error = "";
        state.isData = true;
        state.user = action.payload;
      }
    );
    builder.addCase(fetchUserById.rejected, (state) => {
      state.error = "Something went wrong";
      state.loading = false;
      state.isData = false;
    });
  },
});

export default userDetailSlice.reducer;
