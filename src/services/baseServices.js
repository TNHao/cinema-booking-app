import axios from "axios"
import { TokenCybersoft } from "utils/constants/SettingSystems"
import { ACCESS_TOKEN, DOMAIN, MOCKAPI } from "utils/constants/SettingSystems"

class baseServices {
    get = (url) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'GET',
            headers: {
                'TokenCybersoft': TokenCybersoft
            }
        })
    }
    post = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'POST',
            data : data,
            headers : { 
                'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TokenCybersoft
            }
        })
    }
    put = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'PUT',
            data : data,
            headers : { 
                'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN), 
                'TokenCybersoft': TokenCybersoft
            }
        })
    }
    delete = (url) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'DELETE',
            headers : { 
                'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                'TokenCybersoft': TokenCybersoft
            }
        })
    }
    getMock = (url) => {
        return axios({
            url : `${MOCKAPI}/${url}`,
            method : 'GET',
        })
    }
}

export default baseServices