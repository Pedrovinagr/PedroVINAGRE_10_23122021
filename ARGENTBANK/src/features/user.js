import { createSlice } from '@reduxjs/toolkit'
 
const initialStateValue = { email: "", password: "" };

export const userSlice = createSlice({
    // le nom du slice
    name: "user",
    // le state initial
    initialState: { value: initialStateValue},
    // reducers permet de définir les actions et le reducer
    reducers: {
        // l'action login
        login: (state, action) => {
        // met en valeur ce qu'on a du payload
            state.value = action.payload
        },
        // l'action logout
        logout: (state) => {
        // met en valeur la valeur initiale
            state.value = initialStateValue
        },
    },
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer


// import { useSelector } from "react-redux";
// const user = useSelector((state) => state.user.value)