import verifySlice from "../../reducers/auth/verifySlice";
import {toast} from "react-toastify";
import httpProvider from "../../../provider/httpProvider";
import loadingSlice from "../../reducers/loading/loading";
import requestSlice from "../../reducers/auth/requestSlice";

const {requestOTP} = requestSlice.actions;
const {verifySuccess , verifyFailed} = verifySlice.actions ;
const {showLoading, hideLoading} = loadingSlice.actions;

const verifyAction = (userData) => async dispatch => {
    if (userData) {
        try {
            dispatch(showLoading())
            let data = await getServerSideProps(userData);
            dispatch(verifySuccess(data))
            dispatch(requestOTP())
            toast.success(data?.data?.message)
            dispatch(hideLoading())
        } catch (e) {
            toast.error(e?.response?.data?.messages[0])
            dispatch(verifyFailed())
            dispatch(hideLoading())
        }
    }
}

const getServerSideProps = async (code) => {
    if (code) {
        try {
            let data = await httpProvider.post('auth/verify', code)
            return {data: data.data}
        } catch (e) {
            throw e
        }
    }
}
export default verifyAction;