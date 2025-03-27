import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../slice/adminSlice';

const store = configureStore({
    reducer: {
        adminData: adminReducer
    }
});

export default store;