import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../slice/adminSlice';
const store = configureStore({
    reducer: {
        quizData: adminReducer,
    }
});

export default store;