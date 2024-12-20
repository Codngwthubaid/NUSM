import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase('loginRequest', (state) => { state.loading = true; });
    builder.addCase('loginSuccess', (state, action) => { state.loading = false; state.user = action.payload; });
    builder.addCase('loginFailure', (state, action) => { state.loading = false; state.error = action.payload; });

    builder.addCase('registerRequest', (state) => { state.loading = true; });
    builder.addCase('registerSuccess', (state, action) => { state.loading = false; state.user = action.payload; });
    builder.addCase('registerFailure', (state, action) => { state.loading = false; state.error = action.payload; });

    builder.addCase('loadUserRequest', (state) => { state.loading = true; });
    builder.addCase('loadUserSuccess', (state, action) => { state.loading = false; state.user = action.payload; });
    builder.addCase('loadUserFailure', (state, action) => { state.loading = false; state.error = action.payload; });
})