import verifySlice from "../../reducers/auth/verifySlice";
import {toast} from "react-toastify";
import httpProvider from "../../../provider/httpProvider";


const {verifySuccess , verifyFailed} = verifySlice.actions ;


const verifyAction = (userData) => async dispatch => {
    console.log(userData)
    if (userData) {
        try {
            let data = await getServerSideProps(userData);
            dispatch(verifySuccess(data))
            toast.success(data?.data?.message)
        } catch (e) {
            toast.error('کد وارد شده اشتباه است')
            dispatch(verifyFailed())
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