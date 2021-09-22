import axios from "axios"
import { ACCESS_TOKEN, DOMAIN, MOCKAPI } from "utils/constants/SettingSystems"

class baseServices {
    get = (url) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'GET',
        })
    }
    post = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'POST',
            data : data,
            headers : { 'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    put = (url, data) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'PUT',
            data : data,
            headers : { 'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    delete = (url) => {
        return axios({
            url : `${DOMAIN}${url}`,
            method : 'DELETE',
            headers : { 'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
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