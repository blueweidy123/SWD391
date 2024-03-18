import { defineStore } from 'pinia'
import axios from 'axios';
import { reactive } from 'vue'
import Cookies from 'js-cookie'
import router from '@/router'
import { mixinMethods, $notify } from '@/utils/variables';

export const useAuthStore = defineStore('auth', () => {

    const credential = reactive({
        email: '',
        password: '',
    })

    const state = reactive({
        isLoggedin: false,
        username: '',
    })

    const authLogin = () => {
        mixinMethods.startLoading();
        axios.post('http://localhost:4000/auth/signIn', {
            email: credential.email,
            password: credential.password
        })
            .then(response => {
                const res = response.data;
                Cookies.set('access_token', res.jwt, { expires: 7 });
                Cookies.set('username', res.username, { expires: 7 });
                Cookies.set('fullname', res.fullname, { expires: 7 });
                window.location.href = '/my-appoint';
                mixinMethods.endLoading();
                state.isLoggedin = !!Cookies.get('access_token');
                state.username = Cookies.get('fullname');
            })
            .catch(error => {
                mixinMethods.endLoading();
                state.isLoggedin = !!Cookies.get('access_token');
                $notify.error(error.response.data.responseCode || 'error');
            });
    }


    const authLogout = () => {
        Cookies.remove('access_token');
        Cookies.remove('fullname');
        Cookies.remove('username');
        state.isLoggedin = !!Cookies.get('access_token');
        state.username = Cookies.get('fullname') || '';
    }

    return {
        credential,
        authLogin,
        authLogout,
        state,
    }
})
