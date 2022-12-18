import React, {useState} from 'react';
import Alertify from "../alertify";
import {toast} from "react-toastify";

function Index({setStatusInvite}) {


    const copyLink = (e) => {
        navigator.clipboard.writeText(e.target?.nextElementSibling?.innerText)
        toast.success('لینک شما کپی شد')
    }

    return (<div className="col-12 vh-100 font-pinar  rounded invite position-fixed ">

        <div className="col-12 border-bottom">
            <button onClick={()=> setStatusInvite(false)} className="btn btn-close p-3"></button>
        </div>
        <img src="img/barf.png"  className="img-hendevaneh img5 d-none d-xl-flex" alt=""/>
        <img src="img/barf2.png" className="img-hendevaneh col-12 " alt=""/>
        <div className="col-12 h-100 d-flex justify-content-center align-items-center">
            <section className="col-9 col-md-3 p-2 bg-white bg-opacity-50 shadow-lg rounded-3">
                <h4 className="col-12 d-flex align-items-center justify-content-center text-center fw-bold p-2">
                    دعوت از دوستت
                </h4>

                <div className="col-12 p-2 rounded-2 bg-secondary bg-opacity-75 d-flex align-items-center overflow-hidden text-nowrap">
                    <button onClick={copyLink}
                            className="bi border-0 rounded me-1 bi-share p-2 d-flex fw-bold h5 justify-content-center align-items-center p-0 m-0"></button>
                    <span
                        className="fw-bold overflow-hidden text-ellipsis">https://landing.elanza.com/yalda</span>
                </div>
                <img src="img/hendevaneh.png" className="img-hendevaneh img1" alt=""/>
                <div className="col-12 d-flex justify-content-evenly align-items-center ">
                    <a className="text-decoration-none text-primary h1  d-flex col-2 p-2 justify-content-center align-items-center"
                       href="https://t.me/share/url?url=https://landing.elanza.com/yalda"
                       target="_blank">
                        <i className="bi bi-telegram p-0 m-0 text-center"></i>
                    </a>
                    <a className="text-decoration-none text-success h1  d-flex col-2 p-2 justify-content-center align-items-center"
                       href="https://wa.me/?text=https://landing.elanza.com/yalda"
                       target="_blank">
                        <i className="bi bi-whatsapp p-0 m-0 text-center"></i>
                    </a>
                    <a className="text-decoration-none text-primary h1  d-flex col-2 p-2 justify-content-center align-items-center"
                       href="https://twitter.com/share?url=https://landing.elanza.com/yalda"
                       target="_blank">
                        <i className="bi bi-twitter p-0 m-0 text-center"></i>
                    </a>

                </div>
            </section>
        </div>
    </div>);
}

export default Index;