import React from 'react';

function Index({setStatusPopup , setStatusInvite}) {
    return (
        <div className="popup m-auto m-xl-0 font-pinar ">
            <div className="section  col-10 p-0 col-xl-4 h-75 d-flex justify-content-center align-content-center flex-wrap">
                <figure className="col-11 col-md-5 col-xl-9 m-0 p-0 ">
                    <img src="/img/fal1.png" className=" overflow-hidden" alt="" />
                </figure>
                <div className="col-11 col-xl-9 d-flex justify-content-center align-items-center bg-light p-2 rounded bg-opacity-50">
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