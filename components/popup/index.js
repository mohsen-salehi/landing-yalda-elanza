import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

function Index({setStatusPopup, setStatusInvite}) {
    const [number , setNumber] = useState(0)
    const {request} = useSelector(state => state)
    const {data} = useSelector(state => state.verify.user)
    const verify = useSelector(state => state.verify)
    useEffect(()=>{
        setNumber(Math.floor(Math.random() * 10) + 1)
    },[request])

    return (<div className="popup m-auto m-xl-0 font-pinar">
        <div className="section  col-11 p-0 col-xl-4 h-75 d-flex justify-content-center align-content-center flex-wrap ">
            <figure
                className="col-11 col-md-5 col-xl-9  d-flex flex-wrap justify-content-center align-items-center position-relative">
                <img src={`/img/fal${number}.png`} className=" overflow-hidden" alt=""/>


                <div className="col-12 d-flex justify-content-center align-items-center flex-wrap position-absolute bottom-0  mb-0 mb-lg-3 font-mobile">

                    {
                        request.data ? (
                            request.data && (
                                request?.data?.vouchers_by_tag?.map((item , index) => (
                                    <div key={index} className="col-11 d-flex justify-content-between align-items-center p-1 bg-white p-lg-2 mt-1 shadow-sm rounded-pill">
                                        <button className="col-2 btn btn-danger rounded-pill text-white fw-bold py-2 font-mobile" onClick={(e) => {
                                            navigator?.clipboard?.writeText(JSON.parse(item?.voucher.info)?.code)
                                            toast.success('کد تخفیف شما کپی شد')
                                        } }>کپی
                                        </button>
                                        <strong dir="rtl"
                                            className="col-8 d-flex justify-content-center text-center  align-items-center border border-2 rounded-pill border-danger  py-2 mx-1">
                                            {JSON.parse(item?.voucher.info)?.title}
                                        </strong>
                                        <div className="col-2 d-flex justify-content-center align-items-center ">
                                            <span className="text-danger d-flex justify-content-center align-items-center fw-bold">
                                                هدیه
                                                {
                                                    index === 0 ? ' اول'
                                                        : index === 1 ? " دوم "
                                                            : " سوم "
                                                }
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            verify.status  ?
                                data?.data?.vouchers_by_tag?.map((item , index) => (
                                    <div key={index} className="col-11 d-flex justify-content-between align-items-center p-1 bg-white p-lg-2 mt-1 shadow-sm rounded-pill">
                                        <button className="col-2 btn btn-danger rounded-pill text-white fw-bold py-2 font-mobile" onClick={(e) => {
                                            navigator?.clipboard?.writeText(JSON.parse(item?.voucher.info)?.code)
                                            toast.success('کد تخفیف شما کپی شد')
                                        } }>کپی
                                        </button>
                                        <strong dir="rtl"
                                            className="col-8 d-flex justify-content-center text-center  align-items-center border border-2 rounded-pill border-danger  py-2 mx-1">
                                            {JSON.parse(item?.voucher.info)?.title}
                                        </strong>
                                        <div className="col-2 d-flex justify-content-center align-items-center ">
                                            <span className="text-danger d-flex justify-content-center align-items-center fw-bold">
                                                هدیه
                                                {
                                                    index === 0 ? ' اول '
                                                        : index === 1 ? " دوم "
                                                            : " سوم "
                                                }
                                            </span>
                                        </div>
                                    </div>
                                ))
                                :''
                        )
                    }

                </div>
            </figure>

            <div
                className="col-11 col-xl-9 d-flex justify-content-center align-items-center bg-light p-2 rounded-4 bg-opacity-50 z-index-2">
                <button onClick={() => setStatusPopup(false)}
                        className="btn col-xl-5 btn-danger mx-1 d-flex justify-content-center align-items-center">
                    بستن
                </button>
                <button className="btn col-xl-5 btn-success mx-1 d-flex justify-content-center align-items-center"
                        onClick={() => setStatusInvite(true)}>دعوت از دوستان
                </button>
            </div>
        </div>

    </div>);
}

export default Index;