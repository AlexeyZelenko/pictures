<template>
	<figure
			class="image__wrapper"
	>
		<ImageSpinner/>
		<img
				class="image__item"
				:src="source"
				alt=""
		>
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
			transition: all 0.7s ease-in-out;
			transition-delay: 4s;
			opacity: 1;
		}


	}


</style>