<template>
	<figure
			class="image__wrapper"
	>
		<ImageSpinner/>
		<img
				class="image__item"
				:src="source"
				alt=""
		/>
	</figure>

</template>

<script>
import ImageSpinner from "../components/ImageSpinner.vue"

export default {
	name: 'ImageItem',
	components: {
			ImageSpinner
	},
	props: {
      source: {
			    type: String,
					required: true
			}
	},
}
</script>

<style lang="scss">
@import './src/scss/_variables.scss';
.image {
		&__wrapper {
			min-height: 120px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
			margin-bottom: 30px;
		}
			&__item {
				padding: 5px;
				z-index: 999;
				width: 100%;
				border-radius: 4px;
				transition: all 0.3s ease;
				opacity: 1;
			}
			&__item:hover {
				-webkit-transform: scale(1.1);
				-ms-transform: scale(1.1);
				transform: scale(1.1);
				z-index: 999;
				background-color: #918f88;
				-webkit-transition: all 0.3s ease;;
				-moz-transition: all 0.3s ease;;
				-o-transition: all 0.3s ease;;
				transition: all 0.3s ease;
			}

	}


</style>