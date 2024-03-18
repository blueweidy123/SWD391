import axios from "@/plugins/axios";
import UserApi from "@/services/UserAPI";
import AppointApi from "@/services/AppointAPI";

const service = {
    user: new UserApi(axios.axiosInstance, "/"),
    appoint: new AppointApi(axios.axiosInstance, "/"),
}

export default service

