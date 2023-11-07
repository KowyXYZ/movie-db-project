import { createSlice } from "@reduxjs/toolkit";

const sliceText = createSlice({
    name: ' text',
    initialState: {
        Text: ''
    },
    reducers: {
        getText: (state, action) => {
            state.Text = action.payload

        }
    }

})

export const {getText} = sliceText.actions
export default sliceText.reducer