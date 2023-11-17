import axios from "axios";
axios.defaults.baseURL ='https://web3stories-2f921fb41d11.herokuapp.com';
axios.defaults.headers.post['Content-Type']='multipart/form-data';
axios.defaults.withCredentials=true;