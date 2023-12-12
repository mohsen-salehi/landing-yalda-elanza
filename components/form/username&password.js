import React, {useEffect, useRef} from 'react';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import formAction from "../../redux/actions/form/formAction";
import requestAction from "../../redux/actions/auth/requestAction";

function UsernamePassword() {

    const fullName = useRef()
    const phoneNumber = useRef()
    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        if (fullName.current?.value.length >= 2 && phoneNumber.current?.value.length === 11 ) {
            dispatch(formAction({
                fullName : fullName.current?.value,
                mobile : phoneNumber.current?.value
            }))
            dispatch(requestAction({contact : phoneNumber.current?.value}))
        }else {
            toast.error(`
            فیلد نام و نام خانوادگی خالی نباشد و
            شماره تلفن باید 11 رقم باشد
            `)
        }
    }


    return (
        <div className="col-12 flex-wrap col-md-6 p-3 py-5  d-flex justify-content-center">
            <img src="img/hendevaneh.png" className="img-hendevaneh img1  col-2 " alt=""/>
            <h2 dir="rtl" className="text-center d-flex justify-content-center align-content-between flex-wrap" >
                <span className="d-flex justify-content-center align-items-center col-12 py-2 text-light fw-bold">برای اینکه بتونی فال بگیری</span>  <span className="d-flex justify-content-center align-items-center col-12 py-2 text-light fw-bold">اطلاعاتت رو وارد کن!</span>
            </h2>
            <form onSubmit={formHandler} dir="rtl"
                  className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
                <label className="col-12 d-flex justify-content-center align-items-center my-2">
                    <input ref={fullName} type="text" name="fullName" id="fullName"
                           className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-light fw-bold"
                           placeholder="نام و نام خانوادگی"/>
                </label>
                <label className="col-12 d-flex justify-content-center align-items-center my-2">
                    <input maxLength="11" ref={phoneNumber} type="text" name="phone" id="phone"
                           className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-light fw-bold"
                           placeholder=" شماره تلفن همراه  "/>
                </label>
                <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
                <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                    <button className="border-0 rounded p-2 px-5 btn-accept text-light col-11 col-xl-5  fw-bold  shadow">ثبت
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UsernamePassword;