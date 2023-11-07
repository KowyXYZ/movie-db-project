import { configureStore } from "@reduxjs/toolkit";
import sliceText from "./sliceText";

const store = configureStore({
    reducer: {
        text: sliceText
    }
})

export default store