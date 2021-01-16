<template>
	<!--    ВидеоОбложка-->
	<div class="fullscreen-bg">
		<div class="overlay">
			<div
					class="overlay_min"
			>
				<h1>
					ROMAN KRAVCHUK
				</h1>
				<h3 style="margin-bottom: 50px">АВТОРСЬКІ КАРТИНИ</h3>
<!--				<a-->
<!--						class="btn btn-outline-light btn-lg"-->
<!--						@click="showModal = true"-->
<!--						role="button"-->
<!--				>Подивитися роботи-->
<!--				</a>-->
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
			>
<!--			<source-->
<!--					:src="require('@/assets/video/plane.webm')"-->
<!--					type="video/webm"-->
<!--			>-->
		</video>
	</div>

<div class="container">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<a class="navbar-brand" href="#">Roman Kravchuk</a>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
								to="/"
								class="nav-link"
								aria-current="page"
						>
							Картини
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
								to="/about"
								class="nav-link"
								aria-current="page"
						>
							Про мене
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<router-view/>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
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
		td h3 {
			font-size: 16px;
		}
		.fullscreen-bg {
			height: 200px;
			/*background: url('../assets/images/jumbotron.png') center center / cover no-repeat;*/
			/*padding-top: 100%;*/
		}
		/*.fullscreen-bg__video {*/
		/*	display: none;*/
		/*}*/
		.overlay h1 {
			text-align:center;
			color:#fff;
			font-size: 30px;
			margin:5% 5%;
			text-shadow: 0 0 10px black;
		}
	}
</style>
