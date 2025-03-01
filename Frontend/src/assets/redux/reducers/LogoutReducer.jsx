import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: [],
    error: "kuh",
    value: 0,
};
export const logout = createAsyncThunk("user/logout", async () => {
    //   console.log(payload.userName, payload.password);
    try {
        const response = await fetch("https://quikpik-back.vercel.app//logout", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "sameSite": "None",
            },

        });
        //   const response = await fetch(url, option);
        //   return response.json();
        if (!response.ok) {
            throw new Error("Failed to logout");
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
});

export const logoutReducers = createSlice({
    name: "logoutReducers",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default logoutReducers.reducer;
