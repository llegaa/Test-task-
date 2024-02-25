import {createSlice} from "@reduxjs/toolkit";
import {peopleList} from "../data/peopleList.js";


const initialState = [
    ...peopleList
]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            let index = state.findIndex(i => i.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1, action.payload);
            }
        }
    }
})

export default userSlice.reducer
export const userActions = userSlice.actions