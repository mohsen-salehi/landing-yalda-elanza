import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const requestSuccess = (state = initialState, action) => {
    let payload = action.payload.data
    state.status = true
    state.data = payload.data
}

const requestFailed = (state = initialState) => {
    state.status = false
    state.data = []
}

const requestSlice = createSlice({
    name: "request", initialState, reducers: {
        requestSuccess, requestFailed
    }
})


export default requestSlice;