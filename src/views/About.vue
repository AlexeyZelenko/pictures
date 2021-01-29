<template>
	<div class="row">
		<div class="col align-self-center">
			<div class="card" style="border: none">
				<div class="row row-cols-1 row-cols-md-1">

					<div class="card-body">
						<div >
							<img
									style="max-width: 400px"
									src="../assets/family.jpg"
									alt="..."

							>
						</div>
						<h5
								class="card-title mt-md-2"
						>
							Roman Kravchuk
						</h5>
						<p class="card-text">
							{{ $t('study1.value', { value: 'Вивчав художника-майстра з художнього дерева у Косівський інститут прикладного та декоратвиного мистецтва' }) }}
						</p>
						<p class="card-text">
							{{ $t('study2.value', { value: 'Навчався у НАОМА' }) }}
						</p>
						<p class="card-text">
							{{ $t('study3.value', { value: 'Голова спілки художників України м. Черкаси у Художник' }) }}
						</p>
						<p class="card-text">
							{{ $t('study4.value', { value: 'У шлюбі' }) }}
						</p>
						<p class="card-text"><small class="text-muted">
							{{ $t('study5.value', { value: 'Живе в Україні м. Черкаси' }) }}
						</small></p>
					</div>
					<div class="theme-provider">
    					<input type="color" v-model="theme.color">
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {ref, defineComponent, computed } from 'vue'
export default defineComponent({
    name: "About",
    setup() {
        const theme = ref({
            color: 'red'
        })
			const myColor = ref( '#2c790d')
			const colorBind = computed(() => myColor.value)
			return {
					myColor,
          colorBind,
          theme
			}
    },
    data() {
        return {
            color: 'black',
            font: {
                size: '1rem'
            }
        }
    }
})
</script>

<style lang="scss">
	.card-title {
		color: v-bind('theme.color');
	}
	.card-text {
		color: v-bind(color);

		/* expressions (wrap in quotes) */
		font-size: v-bind('font.size');
	}
	.theme-provider {
		--color-primary: var(--:theme.color);
	}

</style>