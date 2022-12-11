import { createSlice } from "@reduxjs/toolkit"

interface ICurrentUser {
    currentUser_Name: string | null
    currentUser_Email: string | null
    currentUser_ID: string | null
    currentUser_PhotoURL: string | null
}

type InitialStateType = {
    currentUser: ICurrentUser | null
}

const initialState: InitialStateType = {
    currentUser: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createCurrentUser: (state, actions) => {
            state.currentUser = {
                currentUser_Name: actions.payload.userName, 
                currentUser_Email: actions.payload.email,
                currentUser_ID: actions.payload.userID,
                currentUser_PhotoURL: actions.payload.userPhotoURL,
            }
        },
        deleteCurrentUser: (state) => {
            state.currentUser = null
        },
    }
});

export const { createCurrentUser, deleteCurrentUser } = authSlice.actions;
export default authSlice.reducer;