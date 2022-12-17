import React from 'react';
import {useSelector} from "react-redux";

function Index({setStatusPopup , setStatusInvite}) {

    const voucher = useSelector(state => state.request)
    console.log(voucher)
    // const number = Math.floor(random)


    return (
        <div className="popup m-auto m-xl-0 font-pinar ">
            <div className="section  col-10 p-0 col-xl-4 h-75 d-flex justify-content-center align-content-center flex-wrap ">
                <figure className="col-11 col-md-5 col-xl-9 m-0 p-0 d-flex flex-wrap justify-content-center align-items-center position-relative">
                    <img src="/img/fal1.png" className=" overflow-hidden" alt="" />

                    <div className="col-12 d-flex justify-content-center align-items-center flex-wrap position-absolute bottom-0  mb-4 mb-lg-4">
                      <div className="col-12 d-flex justify-content-between align-items-center p-2 shadow-sm rounded-pill">
                          <button className="col-2 btn btn-danger rounded-3 text-white fw-bold py-1 ">کپی</button>
                          <strong className="col-8 d-flex justify-content-center text-center  align-items-center border border-2 rounded-pill border-danger font-9-rem py-2 mx-1">
                                مبلغ 20 هزار تومان برای سفارشات بالای 200 هزار تومان
                          </strong>
                          <div className="col-2 d-flex justify-content-center align-items-center ">
                              <span className="text-danger d-flex justify-content-center align-items-center fw-bold">هدیه اول</span>
                          </div>
                      </div>
                        <div className="col-12 d-flex justify-content-between align-items-center p-2 shadow-sm rounded-pill">
                            <button className="col-2 btn btn-danger rounded-3 text-white fw-bold py-1 ">کپی</button>
                            <strong className="col-8 d-flex justify-content-center text-center  align-items-center border border-2 rounded-pill border-danger font-9-rem py-2 mx-1">
                                مبلغ 20 هزار تومان برای سفارشات بالای 200 هزار تومان
                            </strong>
                            <div className="col-2 d-flex justify-content-center align-items-center ">
                                <span className="text-danger d-flex justify-content-center align-items-center fw-bold">هدیه اول</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center p-2 shadow-sm rounded-pill">
                            <button className="col-2 btn btn-danger rounded-3 text-white fw-bold py-1 ">کپی</button>
                            <strong className="col-8 d-flex justify-content-center text-center  align-items-center border border-2 rounded-pill border-danger font-9-rem py-2 mx-1">
                                مبلغ 20 هزار تومان برای سفارشات بالای 200 هزار تومان
                            </strong>
                            <div className="col-2 d-flex justify-content-center align-items-center ">
                                <span className="text-danger d-flex justify-content-center align-items-center fw-bold">هدیه اول</span>
                            </div>
                        </div>
                    </div>

                </figure>

                <div className="col-11 col-xl-9 d-flex justify-content-center align-items-center bg-light p-2 rounded bg-opacity-50 z-index-2">
                    <button onClick={()=> setStatusPopup(false)} className="btn col-xl-5 btn-danger mx-1 d-flex justify-content-center align-items-center">
                        بستن
                    </button>
                    <button className="btn col-xl-5 btn-success mx-1 d-flex justify-content-center align-items-center" onClick={()=> setStatusInvite(true)} >دعوت از دوستان</button>
                </div>
            </div>

        </div>
    );
}

export default Index;