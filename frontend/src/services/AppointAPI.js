import BaseService from "./BaseService";
import API_CODE from "../utils/api_code.js";

export default class AppointApi extends BaseService {
    async list(params = {}, success, error) {
        await this.get(API_CODE.API_APPT_001, success, error, params);
    }
    async services(params = {}, success, error) {
        await this.get(API_CODE.API_SER_001, success, error, params);
    }
    async docs(params = {}, success, error) {
        await this.get(API_CODE.API_SER_002, success, error, params);
    }
    async slot(params = {}, success, error) {
        await this.get(API_CODE.API_SER_003, success, error, params);
    }
    async create(params = {}, success, error) {
        await this.post(API_CODE.API_APPT_002, success, error, params);
    }
}
