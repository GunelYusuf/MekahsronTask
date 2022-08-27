import  axios from "axios";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));
axios.defaults.baseURL = 'http://localhost:5000/api/';
const responseBody = (response) => response.data;


const  requests ={
    get:(url)=>axios.get(url).then(responseBody),
    post:(url,body)=>axios.post(url,body).then(responseBody),
    postForm: (url,data) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}



const Account = {
    login:(data)=>requests.post("auth",data),
}

const httpAgent = {
    Account,
}

export default httpAgent;