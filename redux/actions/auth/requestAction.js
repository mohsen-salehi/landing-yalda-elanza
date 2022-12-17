import requestSlice from "../../reducers/auth/requestSlice";
import httpProvider from "../../../provider/httpProvider";
import {toast} from "react-toastify";

const {requestSuccess, requestFailed} = requestSlice.actions;


const requestAction = (userData) => async dispatch => {
    if (userData) {
        try {
            let data = await getServerSideProps(userData);
            dispatch(requestSuccess(data))
            toast.success(data?.data?.message)
        } catch (e) {
            dispatch(requestFailed())
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