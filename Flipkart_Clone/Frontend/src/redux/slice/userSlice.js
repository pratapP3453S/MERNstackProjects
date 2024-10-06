import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, logoutUserAPI, signupUserAPI } from "../api/userAPI.js";

const initialState = {
  loggedInUser: null,
  loading: false,
  error: null,
};
//for user signup
export const userSignupAsync = createAsyncThunk(
  "user/userSignup",
  async (userData) => {
    const response = await signupUserAPI(userData);
    return response.data;
  }
);
//for user login
export const userLoginAsync = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
      const response = await loginUserAPI(userData);
      console.log(response.message);
      return response.data;
    }     
);
//for user logout
export const userLogoutAsync = createAsyncThunk("user/userLogout", 
  async() => {
    const response = await logoutUserAPI();
    console.log(response.data)
    return response.data;
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignupAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignupAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload;
      })
      .addCase(userSignupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLoginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload;
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogoutAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload;
      })
      .addCase(userLogoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const loading = (state) => state.user.loading;
export const loggedInUser = (state) => state.user.loggedInUser;

export default userSlice.reducer;

