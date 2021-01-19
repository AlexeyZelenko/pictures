import { createApp, reactive, provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// import { firestorePlugin } from 'vuefire'

export const db = firebase.initializeApp({
    apiKey: "AIzaSyDdvvv2AW6ep9bgevQs33LZ1TFfUQ-LiEc",
    authDomain: "pictures-ca6a4.firebaseapp.com",
    projectId: "pictures-ca6a4",
    storageBucket: "pictures-ca6a4.appspot.com",
    messagingSenderId: "1043807520017",
    appId: "1:1043807520017:web:51cae3be23c2ffcfc438b0",
    measurementId: "G-1G7NVX0X3V"
}).firestore()

export const storage = firebase.storage()
export const auth = firebase.auth()

// Настройки Sweetalert2
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
}

const app = createApp(App)
app.use(VueSweetalert2, options)
app.use(router)
app.use(store)
app.mount('#app')
