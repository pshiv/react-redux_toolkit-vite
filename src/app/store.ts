import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/user/userSlice";
import userDetailSlice from "../components/user/userDetailSlice"

const store = configureStore({
    reducer:{
        user: userSlice,
        userDetail: userDetailSlice
    }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch