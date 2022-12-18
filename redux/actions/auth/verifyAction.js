import verifySlice from "../../reducers/auth/verifySlice";
import {toast} from "react-toastify";
import httpProvider from "../../../provider/httpProvider";
import loadingSlice from "../../reducers/loading/loading";


const {verifySuccess , verifyFailed} = verifySlice.actions ;
const {showLoading, hideLoading} = loadingSlice.actions;

const verifyAction = (userData) => async dispatch => {
    console.log(userData)
    if (userData) {
        try {
            dispatch(showLoading())
            let data = await getServerSideProps(userData);
            dispatch(verifySuccess(data))
            toast.success(data?.data?.message)
            dispatch(hideLoading())
        } catch (e) {
            toast.error('کد وارد شده اشتباه است')
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