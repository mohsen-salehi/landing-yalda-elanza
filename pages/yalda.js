import Head from 'next/head'

import Landing from "../components/landing";
import React, {useState} from "react";
import Popup from "../components/popup";
import Invite from "../components/invite";
import Alertify from "../components/alertify";
import LoadingComponent from "../components/loading/loadingComponent";
import {useSelector} from "react-redux";

export default function Home() {

    const [statusPopup , setStatusPopup] = useState(false)
    const [statusInvite , setStatusInvite] = useState(false)

    const {loading} = useSelector(state => state.loading)
    return (<div className="position-relative">
        <Head>
            <title>هم فاله،هم هدیه | جشنواره‌یلدای الانزا</title>
            <meta name="description" content="هم فاله،هم هدیه | یلدای الانزا"/>
            <meta name="theme-color" content="#FF304E"/>
            <meta property="og:image" itemProp="image" content="https://elanza.com/assets/global/favicon/og_image.png"/><link rel="apple-touch-icon" sizes="57x57" href="https://elanza.com/assets/global/favicon/apple-icon-57x57.png"/><link rel="apple-touch-icon" sizes="60x60" href="https://elanza.com/assets/global/favicon/apple-icon-60x60.png"/><link rel="apple-touch-icon" sizes="72x72" href="https://elanza.com/assets/global/favicon/apple-icon-72x72.png"/><link rel="apple-touch-icon" sizes="76x76" href="https://elanza.com/assets/global/favicon/apple-icon-76x76.png"/><link rel="apple-touch-icon" sizes="114x114" href="https://elanza.com/assets/global/favicon/apple-icon-114x114.png"/><link rel="apple-touch-icon" sizes="120x120" href="https://elanza.com/assets/global/favicon/apple-icon-120x120.png"/><link rel="apple-touch-icon" sizes="144x144" href="https://elanza.com/assets/global/favicon/apple-icon-144x144.png"/><link rel="apple-touch-icon" sizes="152x152" href="https://elanza.com/assets/global/favicon/apple-icon-152x152.png"/><link rel="apple-touch-icon" sizes="180x180" href="https://elanza.com/assets/global/favicon/apple-icon-180x180.png"/><link rel="icon" type="image/png" sizes="512x512" href="https://elanza.com/assets/global/favicon/512x512.png"/><link rel="icon" type="image/png" sizes="192x192" href="https://elanza.com/assets/global/favicon/android-icon-192x192.png"/><link rel="icon" type="image/png" sizes="32x32" href="https://elanza.com/assets/global/favicon/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="96x96" href="https://elanza.com/assets/global/favicon/favicon-96x96.png"/><link rel="icon" type="image/png" sizes="16x16" href="https://elanza.com/assets/global/favicon/favicon-16x16.png"/><link rel="shortcut icon" type="image/x-icon" href="https://elanza.com/assets/global/favicon/favicon-16x16.png"/><meta name="application-TileImage" content="https://elanza.com/assets/global/favicon/ms-icon-144x144.png"/>
        </Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
        <main className='container-fluid font-pinar p-0 m-0 vh-100 main'>
            <Landing setStatusInvite={setStatusInvite} setStatusPopup={setStatusPopup}/>
        </main>
        {
            statusPopup ?   <Popup setStatusInvite={setStatusInvite} setStatusPopup={setStatusPopup} />  : ''
        }

        {
            statusInvite ?   <Invite setStatusInvite={setStatusInvite} />  : ''
        }
        <Alertify />
        {
            loading ?  <LoadingComponent /> : ''
        }


    </div>)
}
