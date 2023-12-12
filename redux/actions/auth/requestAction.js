import requestSlice from "../../reducers/auth/requestSlice";
import httpProvider from "../../../provider/httpProvider";
import {toast} from "react-toastify";
import loadingSlice from "../../reducers/loading/loading";


const {requestSuccess, requestFailed} = requestSlice.actions;
const {showLoading, hideLoading} = loadingSlice.actions;


const requestAction = (userData) => async dispatch => {
    if (userData) {
        try {
            dispatch(showLoading())
            let data = await getServerSideProps(userData);
            dispatch(requestSuccess(data))
            dispatch(hideLoading())
            toast.success(data?.data?.messages[0])
        } catch (e) {
            dispatch(requestFailed())
            dispatch(hideLoading())
        }
    }
}

const getServerSideProps = async (userData) => {
    if (userData) {
        try {
            let data = await httpProvider.post('auth/request', userData)
            return {data: data.data}
        } catch (e) {
            throw e
        }
    }
}


export default requestAction;