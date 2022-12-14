import React from 'react';
import Book from "../book/book";

function Index({setStatusPopup}) {



    return (
        <>
            <section className="top-section d-flex justify-content-center align-items-center">

                    <img src="img/barf.png"  className="img-hendevaneh img5 d-none d-xl-flex" alt=""/>
                    <img src="img/barf2.png" className="img-hendevaneh col-12 " alt=""/>


                <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-light">
                    <img src="img/anar.png" className="img-hendevaneh img3 col-4 " alt=""/>
                </div>
                <img src="img/hendevaneh.png" className="img-hendevaneh img1" alt=""/>
            </section>
            <section
                className="col-12 flex-wrap  flex-column-reverse flex-md-row  position-relative  p-2  d-flex justify-content-center align-items-center">
                <img src="img/hendevaneh.png" className="img-hendevaneh img2" alt=""/>
                <div className="col-12 col-md-5   border-danger position-relative">
                    <img src="img/anar.png" className="img-hendevaneh img3 col-6 " alt=""/>
                    <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
                    <Book setStatusPopup={setStatusPopup}/>
                </div>
                <div className="col-12 flex-wrap col-md-6 p-3 py-5  d-flex justify-content-center">
                    <img src="img/hendevaneh.png" className="img-hendevaneh img1  col-2 " alt=""/>
                    <h3 dir="rtl" className="text-center d-flex justify-content-center align-content-between flex-wrap" ><span className="d-flex justify-content-center align-items-center col-12 py-2 text-light fw-bold">برای اینکه بتونی فال بگیری</span>  <span className="d-flex justify-content-center align-items-center col-12 py-2 text-light fw-bold">اطلاعاتت رو وارد کن!</span></h3>

                    <form dir="rtl"
                          className="col-12 p-2  rounded d-flex justify-content-center align-content-between flex-wrap">
                        <label className="col-12 d-flex justify-content-center align-items-center my-2">
                            <input type="text" name="fullName" id="fullName"
                                   className="border shadow-sm col-11 col-xl-5 rounded p-2 bg-light fw-bold"
                                   placeholder="نام و نام خانوادگی"/>
                        </label>
                        <label className="col-12 d-flex justify-content-center align-items-center my-2">
                            <input type="text" name="phone" id="phone"
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
            </section>
            <section className="col-12 p-xl-3 py-3 p-2 my-5 banner-center d-flex  justify-content-center align-items-center">
                <h2 dir="rtl" className="d-none d-xl-flex m-0 p-0 text-light"><a href="https://elanza.com" target="_blank" className="text-decoration-none text-white fw-bold">تخفیف های یلدایی الانزا</a></h2>
                <h6 dir="rtl" className="d-block d-xl-none m-0 p-0 text-light"><a href="https://elanza.com" target="_blank" className="text-decoration-none text-white fw-bold">تخفیف های یلدایی الانزا</a></h6>
                <img src="img/barf.png" className="img-hendevaneh img4 d-none d-lg-block" alt=""/>
            </section>
            <footer className="col-12 d-flex flex-wrap justify-content-between justify-content-xl-evenly align-items-center link ">
                <img src="img/barg.png" className="img-hendevaneh barg position-absolute d-none d-xl-flex" alt=""/>
                <a href="https://elanza.com/brand/lafarrerr" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/lafarer.png" className="img-fluid col-10" alt=""/>
                </a>
                <a href="https://elanza.com/brand/prime" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/prime.png" className="img-fluid col-10" alt=""/>
                </a>
                 <a href="https://elanza.com/brand/genobiotic" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/geno.png" className="img-fluid col-10" alt=""/>
                </a>
                 <a href="https://elanza.com/brand/top-shop" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/topshop.png" className="img-fluid col-10 " alt=""/>
                </a>
                 <a href="https://elanza.com/brand/cerita" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/cerita.png" className="img-fluid col-10" alt=""/>
                </a>
                 <a href="https://elanza.com/brand/note" target="_blank" className="col-12 col-md-4 col-xl-2 flex-wrap  d-flex justify-content-center align-items-center">
                    <img src="img/not.png" className="img-fluid col-10" alt=""/>
                </a>
                <img src="img/anar.png" className="img-hendevaneh img5 col-12 col-xl-3" alt=""/>
            </footer>

        </>

    );
}

export default Index;