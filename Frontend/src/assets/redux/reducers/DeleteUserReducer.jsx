import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: [],
    error: "kuh",
    value: 0,
};
export const deleteuser = createAsyncThunk("user/deleteuser", async () => {
    //   console.log(payload.userName, payload.password);
    try {
        const response = await fetch("https://quikpik-back.vercel.app//user/deleteProfile", {
            method: "DELETE",
            credentials: "include",

        });
        //   const response = await fetch(url, option);
        //   return response.json();
        if (!response.ok) {
            throw new Error("Failed to delete the profile");
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
});

export const deleteuserReducers = createSlice({
    name: "deleteuserReducers",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(deleteuser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteuser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(deleteuser.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default deleteuserReducers.reducer;