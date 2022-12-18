import {configureStore} from "@reduxjs/toolkit";
import verifySlice from "./redux/reducers/auth/verifySlice";
import requestSlice from "./redux/reducers/auth/requestSlice";
import userInfo from "./redux/reducers/form/formSlice";
import loading from "./redux/reducers/loading/loading";

const store = configureStore({
    reducer : {
        userInfo : userInfo.reducer,
        request : requestSlice.reducer,
        verify : verifySlice.reducer,
        loading : loading.reducer,
    },
    devTools : true
})

export default store;