import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { signin } from '../../data/users'
import { User } from '../../types'

type AuthState = {
    user: User | null
}

const initialState: AuthState = {
    user: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        signout: (state) => {
            state.user = null
        },
    },
})

export const { signout, setUser } = authSlice.actions

export default authSlice.reducer
