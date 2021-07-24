import axios from 'axios';

const userProfile= (userId)=>{
    return axios.post("https://csci-5709-nodejs.herokuapp.com/api/myprofile/"+userId);
}

export default {
    loginUser,
}