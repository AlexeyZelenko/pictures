<template>
	<div class="row">
		<router-link
				style="text-decoration: none"
				:to="{ name: 'Home'}"
		>
			<div class="d-grid gap-2">
				<button
						class="btn btn-primary"
						type="button"
				>
					{{ $t('out.value', { value: 'на Головну' }) }}
				</button>
			</div>
		</router-link>

		<div
				class="col align-self-center"
		>
			<div
					class="card"
					style="border: none"
			>
				<div class="row row-cols-1 row-cols-md-1">

					<div class="card-body">
						<div >
							<img
									class="imgStyle"
									:src="`https://drive.google.com/uc?export=view&id=${picture.imageCode}`"
									alt=""
							>
						</div>
						<h5
								class="card-title mt-md-2"
						>
							{{picture.title}}
						</h5>
						<p
								class="card-text"
						>
							{{picture.price}}$
						</p>
						<p
								class="card-text"
						>
							<small
									class="text-muted"
							>
								{{picture.description}}
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {ref} from "vue";
    import { db } from "../main";
    import firebase from 'firebase'

    export default {
        name: "EditPicture",
        setup () {
            const picture = ref({})
            return {
                picture,
            }
        },
        created () {
            const dbRef = db.collection('pictures').doc(this.$route.params.id)
            dbRef.get().then((doc) => {
                this.picture = doc.data()
            }).catch((error) => {
                console.log(error)
            })
        },
    }
</script>

<style scoped>
	.imgStyle {
		max-width: 80%;
	}
	@media (max-width: 767px) {
		.imgStyle {
			max-width: 90%;
		}
	}
	@media (max-width: 575px) {
		.imgStyle {
			max-width: 90%;
		}
	}
</style>