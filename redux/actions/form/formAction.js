import userInfo from "../../reducers/form/formSlice";
import loadingSlice from "../../reducers/loading/loading";

const {info} = userInfo.actions
const {showLoading, hideLoading} = loadingSlice.actions;


const userInfoAction = (information) => dispatch => {
    try {
        dispatch(showLoading())
        dispatch(info(information))
        dispatch(hideLoading())
    }catch (e){
        console.log(e)
        dispatch(hideLoading())
    }
}

export default userInfoAction;