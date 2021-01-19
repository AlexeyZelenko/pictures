<template>
<!--	<Multilingual />-->
	<div>
	</div>
		<!--    ВидеоОбложка-->
	<div class="fullscreen-bg">
		<div class="overlay">
			<div
					class="overlay_min"
			>
				<SwitchLanguage />
				<h1>
					ROMAN KRAVCHUK
				</h1>
				<h4>
					{{ $t('title.value', { value: 'АВТОРСЬКІ КАРТИНИ' }) }}
				</h4>
			</div>
		</div>
		<video
				loop=""
				muted=""
				autoplay=""
				class="fullscreen-bg__video"
		>
			<source
					src='./assets/video/picture.mp4'
					type="video/mp4"
			>
			<source
					src='./assets/video/picture.webm'
					type="video/webm"
			>
		</video>
	</div>

<div class="container">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<a class="navbar-brand" href="#">
					Roman Kravchuk
				</a>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
								to="/"
								class="nav-link"
								aria-current="page"
						>
							{{ $t('pictures.value', { value: 'Картини' }) }}
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
								to="/about"
								class="nav-link"
								aria-current="page"
						>
							{{ $t('About_me.value', { value: 'Про мене' }) }}
						</router-link>
					</li>
				</ul>
				<!--ВХОД ЧЕРЕЗ ГУГЛ АККАУНТ-->
				<google></google>
			</div>
		</div>
	</nav>

	<router-view/>
</div>

	<footer>
		<div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952960.3530958146!2d28.06617181472633!3d49.91513921396577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0YHRiywg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE4MDAw!5e0!3m2!1sru!2sua!4v1611081910710!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			<div>
				<div class="brand">
					{{ $t('address.value', { value: 'Україна м. Черкаси' }) }}
				</div>
				<div class="brand">{{ new Date().getFullYear() }} — Roman Kravchuk</div>
			</div>
		</div>
	</footer>

</template>

<script>
import { defineAsyncComponent } from 'vue'
import Multilingual from './components/Multilingual.vue'
import SwitchLanguage from './components/SwitchLanguage.vue'
import HelloWorld from './components/HelloWorld.vue'
// import google from './components/google.vue'
const google = defineAsyncComponent(() => import('./components/google.vue'))

export default {
  name: 'App',
  components: {
      Multilingual,
		SwitchLanguage,
    HelloWorld,
		google
  },
}
</script>

<style>
	.overlay {
		background: rgba(0,0,0,0.6);
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		z-index: 4;
		text-align:center;
	}
	.overlay h1 {
		text-align:center;
		color:#fff;
		font-size: 45px;
		margin:10% 10%;
		text-shadow: 0 0 10px black;
	}
	.overlay h4 {
		text-align:center;
		color: #a08e8e;
		margin:10% 10%;
		text-shadow: 0 0 10px black;
	}
	iframe {
		width: 100%;
		height: 640px;
	}
	.fullscreen-bg {
		overflow: hidden;
		position: relative;
		height: 100%;
		width: 100%;
		padding-top:45%;
	}

	.fullscreen-bg__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	/* Footer */
	footer {
		clear: both;
		padding-top: 50px;
		padding-bottom: 40px;
		text-align: center;
		background-color: #38404b;
		margin-top: 30px;
	}

	footer .brand {
		color: #bcc9dd;
	}

	footer .menu li {
		padding-left: 10px;
		padding-right: 10px;
	}

	footer .menu li a {
		color: #bcc9dd;
	}

	footer .menu {
		display: inline-block;
		margin-top: 30px;
		margin-bottom: 15px;
	}

	footer .copyright {
		font-size: 12px;
		color: #eee;
	}
	/* Media Queries */
	@media (max-width: 767px) {
		.overlay_min {
			padding-top: 10%;
		}
		h1 {
			font-size: 30px;
		}
		iframe {
			width: 100%;
			height: 400px;
		}
		.fullscreen-bg {
			height: 200px;
			background: url('./assets/jumbotron.jpg') center center / cover no-repeat;
			padding-top: 100%;
		}
		.fullscreen-bg__video {
			display: none;
		}
		.overlay h1 {
			text-align:center;
			color:#fff;
			font-size: 30px;
			margin:5% 5%;
			text-shadow: 0 0 10px black;
		}
	}

</style>
