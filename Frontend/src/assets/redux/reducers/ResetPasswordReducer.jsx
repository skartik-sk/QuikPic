import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to reset password
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ id, token, password }) => {
    try {
      const response = await fetch(`https://quikpik-back.vercel.app//resetPassword/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Failed to reset password');
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message || 'Failed to reset password');
    }
  }
);

// Slice for reset password functionality
const resetPasswordReducers = createSlice({
  name: "resetPassword",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export default resetPasswordReducers.reducer;
