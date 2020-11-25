require('./bootstrap');
import './bootstrap';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import Axios from "axios";
import VueAxios from 'vue-axios';
import auth from './auth';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.use(VueAxios,Axios)
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{
                auth:true
            }
        } ,
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/',
            name: 'contact',
            component: Contact
        },
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/',
            name: 'login',
            component: Login,
            meta:{
                auth:false
            }
        },
    ]
})
const app = new Vue({
    el: '#app',
    components: {App},
    router,
})
