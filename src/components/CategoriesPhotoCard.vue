<template>
	<div
			ref="el"
			class="card"
	>
		<img
				class="imgStyle"
				:src="isShown ? `https://drive.google.com/uc?export=view&id=${pictureImageCode}` : null"
				alt=""
		>
		<div class="card-body">
			<h5 class="card-title">{{pictureTitle}}</h5>
			<p class="card-text">{{picturePrice}} $</p>
		</div>
		<router-link
				style="margin-bottom: 10px;"
				:to="{ name: 'edit_picture', params: { id: picture.key }}"
		>
			<button
					type="button"
					class="btn btn-outline-success"
			>
				{{ $t('more_details.value', { value: 'детальніше' }) }}
			</button>
		</router-link>
	</div>
</template>

<script>
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
    import useIntersectionObserver from '../composables/useIntersectionObserver'

    export default {
        name: 'CategoriesPhotoCard',
        props: {
            picture: Object
        },
        setup (props) {
            const photo = ref({})
            const el = ref(null)
            const { observe, unobserve, isShown } = useIntersectionObserver()

            const pictureImageCode = computed(() => {
                return props.picture.imageCode
            })
            const pictureTitle = computed(() => {
                return props.picture.title
            })
            const picturePrice = computed(() => {
                return props.picture.price
            })
            const categoryKey = computed(() => {
                return props.picture.key
            })

            onMounted(() => {
                observe(el.value)
            })

            onBeforeUnmount(() => {
                unobserve(el.value)
            })
            return {
                pictureImageCode,
                el,
                isShown,
                pictureTitle,
                photo,
                categoryKey,
                picturePrice
            }
        }
    }
</script>

<style scoped>
	.imgStyle {
		/*height: 300px;*/
		max-width: 100%;
	}
</style>
