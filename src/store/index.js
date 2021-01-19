import { createStore } from 'vuex'
// import { createApp } from 'vue'
import { db } from '../main.js'
import firebase from 'firebase/app'

export default createStore({
    state: {
        User_Entrance: false,
        userEntrance: false,
        adminEntrance: false,
        userId: null
    },
    mutations: {
        USER_ENTRANCE: (state, userEntrance) => {
            state.userEntrance = userEntrance
        },
        USER_ID_ENTRANCE: (state, userID) => {
            state.userId = userID
        },
        ADMIN_ENTRANCE: (state, adminEntrance) => {
            state.adminEntrance = adminEntrance
        }
    },
    actions: {
        async logout ({ commit }) {
            await firebase.auth().signOut()
                .then(() => {
                    const adminEntrance = !!firebase.auth().currentUser
                    commit('ADMIN_ENTRANCE', adminEntrance)
                })
        },
        getUid () {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async signInWithGoogle ({ commit, dispatch }) {
            const uid = await dispatch('getUid')
            try {
                const provider = new firebase.auth.GoogleAuthProvider()
                await firebase.auth().signInWithPopup(provider)
                const uid = await dispatch('getUid')

                // Проверка администратора
                if (['J4IfR9V40cdfNDKumeiyqvzhyzK2']
                    .some(elem => elem === uid)) {
                    console.log('Администратор вошел!')
                    // router.push('/admin')
                } else {
                    alert('Тільки адміністратори сайту можуть увійти!!!')
                    console.log('Пользователь вошел!')
                }
            } catch (e) {
                commit('setError', e)
                throw e
            }

            const userEntrance = !!firebase.auth().currentUser
            const USER_ID = await dispatch('getUid')
            if (userEntrance) {
                const adminEntrance = await ['J4IfR9V40cdfNDKumeiyqvzhyzK2'].includes(USER_ID)
                commit('ADMIN_ENTRANCE', adminEntrance)
            }
            commit('USER_ENTRANCE', userEntrance)
        },
    },
    getters: {
        USER_ID (state) {
            return state.userId
        },
        User_Entrance (state) {
            return state.userEntrance
        }
    },
    modules: {
    }
})

