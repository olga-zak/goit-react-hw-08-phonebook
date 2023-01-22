import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  // token: '',
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.user = {
          name: '',
          email: '',
        };
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          logOut.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          logOut.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          signUp.fulfilled,
          logIn.fulfilled,
          logOut.fulfilled,
          fetchCurrentUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, { payload: { user, token } }) => {
          state.token = token;
          state.user = user;
        }
      ),
  // extraReducers: {
  // //   [signUp.pending]: state => {
  // //     state.isLoading = true;
  // //   },
  // //   [signUp.fulfilled]: (state, { payload: { user, token } }) => {
  // //     state.isLoading = false;
  // //     state.error = null;
  // //     state.token = token;
  // //     state.user = user;
  // //   },
  // //   [signUp.rejected]: (state, { payload }) => {
  // //     state.isLoading = false;
  // //     state.error = payload;
  // //   },
  // //   [logIn.pending]: state => {
  // //     state.isLoading = true;
  // //   },
  // //   [logIn.fulfilled]: (state, { payload: { user, token } }) => {
  // //     state.isLoading = false;
  // //     state.error = null;
  // //     state.token = token;
  // //     state.user = user;
  // //   },
  // //   [logIn.rejected]: (state, { payload }) => {
  // //     state.isLoading = false;
  // //     state.error = payload;
  // //   },
  // //   [logOut.pending]: state => {
  // //     state.isLoading = true;
  // //   },
  // //   [logOut.fulfilled]: state => {
  // //     state.isLoading = false;
  // //     state.error = null;
  // //     state.token = null;
  // //     state.user = {
  // //       name: '',
  // //       email: '',
  // //     };
  // //   },
  // //   [logOut.rejected]: (state, { payload }) => {
  // //     state.isLoading = false;
  // //     state.error = payload;
  // //   },
  // },
});

export default authSlice.reducer;
