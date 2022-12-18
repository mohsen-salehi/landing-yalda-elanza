import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading : false
}


const showLoading = (state = initialState )=> {
    state.loading = true
}
const hideLoading = (state = initialState )=> {
    state.loading = false
}

const loadingSlice = createSlice({
    name : "loading",
    initialState,
    reducers: {
        showLoading, hideLoading
    }
})

export default loadingSlice ;