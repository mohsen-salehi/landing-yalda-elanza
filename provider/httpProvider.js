import axios from "axios";
import config from "../config";

class HttpProvider {
    static baseUrl = config.base_url
    static get = async(url,headers) =>{
        headers = {
            headers:{
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            }
        }
        url = HttpProvider.baseUrl + url
        return await axios.get(url , headers)
    }
    static post = async (url , data = {} , headers={}) =>{
        headers = {
            headers:{
                ...headers, 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*"
            }
        }
        url =HttpProvider.baseUrl + url
        return await axios.post(url , data , headers)
    }
    static put = async (url , data={} , headers={}) =>{

    }
    static delete = async (url , headers) =>{

    }
    static setTokenHeader =(store) => {
        return{
            Authorization : "Bearer " +store().verify.auth.token
        }
    }
}

export default HttpProvider ;