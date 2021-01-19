<template>
	<h1>Детальна інфо про картину</h1>
	<div class="row">
		<div class="col align-self-center">
			<div class="card" style="border: none">
				<div class="row row-cols-1 row-cols-md-1">

					<div class="card-body">
						<div >
							<img
									style="max-width: 400px"
									:src=picture.image
									alt=""

							>
						</div>
						<h5 class="card-title mt-md-2">{{picture.title}}</h5>
						<p class="card-text">{{picture.price}}$</p>
						<p class="card-text"><small class="text-muted">{{picture.description}}</small></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {ref} from "vue";
    import {db} from "../main";
    import firebase from 'firebase'

    export default {
        name: "EditPicture",
        setup () {
            const picture = ref({})
            return {
                picture
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

</style>