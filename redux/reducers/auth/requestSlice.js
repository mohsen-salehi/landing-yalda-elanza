import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const requestSuccess = (state = initialState, action) => {
    let payload = action.payload.data
    state.status = "OTP"
    state.data = payload.data
}
const requestOTP = (state = initialState) => {
    state.status = true
}
const requestFailed = (state = initialState) => {
    state.status = false
    state.data = null
}

const requestSlice = createSlice({
    name: "request", initialState, reducers: {
        requestSuccess, requestFailed , requestOTP
    }
})


export default requestSlice;