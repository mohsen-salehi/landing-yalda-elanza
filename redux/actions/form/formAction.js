import userInfo from "../../reducers/form/formSlice";

const {info} = userInfo.actions



const userInfoAction = (information) => dispatch => {
    try {
        dispatch(info(information))
    }catch (e){
        console.log(e)
    }
}

export default userInfoAction;