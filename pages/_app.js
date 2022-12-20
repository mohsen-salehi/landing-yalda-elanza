import '../styles/globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Provider} from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
