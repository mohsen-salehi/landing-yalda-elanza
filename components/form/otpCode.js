import React, {useRef} from 'react';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import verifyAction from "../../redux/actions/auth/verifyAction";

function OtpCode() {

    const code = useRef()
    const dispatch = useDispatch()
    const {fullName , mobile} = useSelector(state => state.userInfo)
    const formHandler = (e) => {
        e.preventDefault()
        if (code.current?.value.length === 5 ) {
            dispatch(verifyAction({token : code.current?.value , full_name : fullName , mobile }))
        }else {
            toast.error(`
                کد باید 5 رقم باشد
            `)
        }
    }


    return (
        <div className="col-12 flex-wrap col-md-6 p-3 py-5  d-flex justify-content-center">
            <img src="img/hendevaneh.png" className="img-hendevaneh img1  col-2 " alt=""/>
            <h3 dir="rtl" className="text-center d-flex justify-content-center align-content-between flex-wrap text-white fw-bold" >کد تایید را وارد کنید</h3>
            <form onSubmit={formHandler} dir="rtl"
                  className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
                <label className="col-12 d-flex justify-content-center align-items-center my-2">
                    <input maxLength="5" ref={code} type="text" name="otp_code" id="otp_code"
                           className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-light fw-bold"
                           placeholder="کد تایید "/>
                </label>
                <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
                <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                    <button className="border-0 rounded p-2 px-5 btn-accept text-light col-11 col-xl-5  fw-bold  shadow">تایید
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OtpCode;