import { defineStore } from 'pinia'
import service from "../plugins/service"
import { reactive } from 'vue'
import { mixinMethods, $notify } from '@/utils/variables';
import router from '@/router';

export const useAppointStore = defineStore('appoint', () => {

    const appointList = reactive({
        data: [],
    });
    const docsList = reactive({
        data: [],
    });
    const serviceList = reactive({
        data: [],
    });
    const timeSlots = reactive({
        data: [],
    });

    const appointModel = reactive({
        'doctorId': '',
        'serviceId': '',
        'timeId': 1,
        'note': '',
    })

    const getServiceList = () => {
        mixinMethods.startLoading();
        service.appoint.services(
            {},
            (res) => {
                serviceList.data = res;
                mixinMethods.endLoading();
            },
            (err) => {
                mixinMethods.endLoading();
                $notify.error(err.responseCode || 'error');
            }
        )
    }
    const getDocsList = () => {
        mixinMethods.startLoading();
        service.appoint.docs(
            {},
            (res) => {
                docsList.data = res;
                mixinMethods.endLoading();
            },
            (err) => {
                mixinMethods.endLoading();
                $notify.error(err.responseCode || 'error');
            }
        )
    }

    const getAppointList = () => {
        mixinMethods.startLoading();
        service.appoint.list(
            {},
            (res) => {
                appointList.data = res;
                mixinMethods.endLoading();
            },
            (err) => {
                mixinMethods.endLoading();
                $notify.error(err.responseCode || 'error');
            }
        )
    }

    const getTimeSlots = () => {
        mixinMethods.startLoading();
        service.appoint.slot(
            {},
            (res) => {
                timeSlots.data = timeSlots.data.concat(res);
                mixinMethods.endLoading();
            },
            (err) => {
                mixinMethods.endLoading();
                $notify.error(err.responseCode || 'error');
            }
        )
    }

    const makeApppoint = async () => {
        mixinMethods.startLoading();
        service.appoint.create(
            appointModel,
            (res) => {
                mixinMethods.endLoading();
                router.push('/my-appoint')
                $notify.success(res.message || 'success');
            },
            (err) => {
                mixinMethods.endLoading();
                $notify.error(err.responseCode || 'error');
            }
        )
    }

    return {
        appointList,
        getDocsList,
        getServiceList,
        appointModel,
        getAppointList,
        makeApppoint,
        docsList,
        serviceList,
        timeSlots,
        getTimeSlots,
    }
})