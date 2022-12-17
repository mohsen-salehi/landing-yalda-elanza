import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false ,
    user : {}
}


const verifySuccess = (state = initialState , action) => {
    state.status = true
    state.user = action.payload
}
const verifyFailed = (state = initialState , action) => {
    state.status = false
    state.user = null
}

const verifySlice = createSlice({
    name : "verify",
    initialState ,
    reducers : {
        verifySuccess,verifyFailed
    }
})


export default verifySlice;