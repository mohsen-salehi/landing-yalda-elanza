import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fullName : '',
    mobile : ''
}

const info = (state = initialState , action ) => {
    state.fullName = action.payload.fullName
    state.mobile = action.payload.mobile
}

const userInfo = createSlice({
    name : "info" ,
    initialState ,
    reducers : {info}
})


export default userInfo;