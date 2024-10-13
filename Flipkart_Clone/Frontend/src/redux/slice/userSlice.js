import { createAsyncThunk, createSlice, isPending, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { loginUserAPI, logoutUserAPI, signupUserAPI } from "../api/userAPI.js";
import { act } from "react";

// const initialState = {
//   loggedInUser: null,
//   loading: false,
//   error: null,
// };
const storedAuth = JSON.parse(sessionStorage.getItem('isAuth'));
const storedUser = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
  user: storedUser || {},
  isAuthenticated: storedAuth || false,
  loading: false,
  isRegistered: false,
  isLogin: false,
  error: null,
  message: null,
};

export const userSignupAsync = createAsyncThunk(
  "user/userSignup",
  async (userData) => {
    const response = await signupUserAPI(userData);
    return response;
  }
);

export const userLoginAsync = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
    const response = await loginUserAPI(userData);
    return response;
  }
);

export const userLogoutAsync = createAsyncThunk(
  "user/userLogout",
  async () => {
    const response = await logoutUserAPI();
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(userLogoutAsync.fulfilled, (state, action) => {
      sessionStorage.setItem('isAuth', false);
      sessionStorage.removeItem('user');
      state.loading = false;
      state.user = {};
      state.isAuthenticated = false;
      state.isLogin= false;
      state.isRegistered= false;
      state.error= null;
      state.message= action.payload.message;
    })
      .addMatcher(isPending(userSignupAsync, userLoginAsync, userLogoutAsync), (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addMatcher(isFulfilled(userSignupAsync, userLoginAsync), (state, action) => {
        sessionStorage.setItem('isAuth', true);
        sessionStorage.setItem('user', JSON.stringify(action.payload));
        state.loading= false;
        state.isAuthenticated= true;
        state.isRegistered= true;
        state.isLogin= true;
        state.user= action.payload.data;
        state.error= null;
        state.message= action.payload.message;
      })
      // .addCase(userSignupAsync.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      // })
      // .addCase(userLoginAsync.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      // })

      .addMatcher(isRejected(userSignupAsync, userLoginAsync, userLogoutAsync), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const loading = (state) => state.user.loading;
export const user = (state) => state.user.user;

export default userSlice.reducer;
