<template>
	<ul class="navbar-nav mr-2 mb-2 mb-lg-0">
		<!-- Avatar -->
		<span
				v-if="adminEntrance"
				style="font-size:30px; cursor:pointer; color: #bd5c5c; margin-right: 10px"
				@click="openNav"
		>
      <button
					type="button"
					class="btn btn-outline-success"
			>
				Адмінка
			</button>
    </span>
		<li
				style="color: #3c8baf; margin-right: 5px"
				v-if="adminEntrance"
		>
			{{getUserName}}
		</li>
		<li
				v-if="adminEntrance"
				class="nav-item dropdown mr-4"
		>
			<img
					style="height: 40px"
					:src="getProfilePicUrl"
					class="rounded-circle"
					alt=""
					loading="lazy"
			/>
		</li>
		<li>
			<button
					v-if="!adminEntrance"
					@click="signInWithGoogle"
					type="button"
					class="btn btn-outline-primary"
			>
				{{ $t('Go_away.value', { value: 'Увійти' }) }}
			</button>
		</li>
		<li>
			<button
					v-if="adminEntrance"
					@click="logout"
					type="button"
					class="btn btn-outline-primary"
			>
				Вийти
			</button>
		</li>

		<!--    Боковое меню-->
		<div
				id="mySidenav"
				class="sidenav2"
		>
			<a
					href="javascript:void(0)"
					class="closebtn"
					@click="closeNav"
			>
				×
			</a>
			<router-link
					to="/"
			>
				Головна
			</router-link>
			<router-link
					class="dropdown-item"
					to="/list_picture"
					exact
			>
				Список картин
			</router-link>
			<router-link
					class="dropdown-item"
					to="/add_picture"
					exact
			>Додати картину
			</router-link>
			<a
					class="dropdown-item"
					href="https://squoosh.app/index.html"
					target="_blank"
			>
				Сжати фото
			</a>
		</div>
	</ul>
</template>

<script>
    import { computed } from 'vue'
    import store from '../store'
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: 'google',
        methods: {
            openNav () {
                document.getElementById('mySidenav').style.width = '250px'
            },
            closeNav () {
                document.getElementById('mySidenav').style.width = '0'
            }
        },
        setup () {
            const adminEntrance = computed(() => store.state.adminEntrance)
            const signInWithGoogle = () => {
                try {
                    store.dispatch('signInWithGoogle')
                } catch (e) {
                    console.log('Ошибка входа Google')
                }
            }
            const logout = () => {
                store.dispatch('logout')
            }

            const getUserName = computed(() => firebase.auth().currentUser.displayName)
            const getProfilePicUrl = computed(() => firebase.auth().currentUser.photoURL)
            return {
                getProfilePicUrl,
                getUserName,
                logout,
                signInWithGoogle,
                adminEntrance
            }
        }
    }
</script>

<style lang="scss">
	@import './src/scss/_variables.scss';
	.sidenav2 {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 9999;
		top: 0;
		right: 0;
		background-color: $background-color-admin;
		overflow-x: hidden;
		transition: 0.5s;
		padding-top: 60px;
	}

	.sidenav2 a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 18px;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

	.sidenav a:hover {
		color: #675b5b;
		background-color: #282828;
	}

	.sidenav .closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}

	@media screen and (max-height: 450px) {
		.sidenav {padding-top: 15px;}
		.sidenav a {font-size: 18px;}
	}
</style>
