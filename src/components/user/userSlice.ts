import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./userAction";
type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: true,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.error = "";
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUser.rejected, (state) => {
      state.error = "Something went wrong";
      state.loading = false;
      state.users = [];
    });
  },
});

export default userSlice.reducer;
