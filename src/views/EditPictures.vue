<template>
	<div
			class="row justify-content-center"
			style="margin: 5px"
	>
		<div class="col-md-5">
			<h3 class="text-center">Редагувати картину</h3>
			<form
					@submit.prevent="onUpdateForm"
			>
				<div class="form-group">
					<label>Назва картини</label>
					<p style="color: blueviolet">{{picture.title}}</p>
					<!--          <input-->
					<!--            type="text"-->
					<!--            class="form-control"-->
					<!--            v-model="photo.name"-->
					<!--            required-->
					<!--          >-->
				</div>

				<div
						class="form-group"
						style="margin-bottom: 10px"
				>
					<label>Редагувати Опис</label>
					<input
							type="text"
							class="form-control"
							v-model="picture.description"
							required
					>
				</div>
				<div
						class="form-group"
						style="margin-bottom: 10px"
				>
					<label>Редагувати ціну</label>
					<input
							type="text"
							class="form-control"
							v-model="picture.price"
							required
					>
				</div>
				<div
						class="form-group"
						style="margin-bottom: 10px"
				>
					<label>Редагувати посилання</label>
					<input
							type="text"
							class="form-control"
							v-model="picture.imageCode"
							required
					>
				</div>


				<div class="form-group">
					<button
							class="btn btn-primary btn-block"
					>
						Зберегти
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { db } from '../main'
    import firebase from 'firebase'

    export default defineComponent({
        setup () {
            const File = ref([])
            const picture = ref({})
            const count = ref(0)
            return {
                picture, count, File
            }
        },
        created () {
            const dbRef = db.collection('pictures').doc(this.$route.params.id)
            dbRef.get().then((doc) => {
                this.picture = doc.data()
            }).catch((error) => {
                this.$swal({
                    title: 'Помилка...',
                    text: error
                })
            })
        },
        methods: {
            previewFiles (event) {
                // process your files, read as DataUrl or upload...
                this.File = event.target.files

                // if you need to re-use field or drop the same files multiple times
                // this.$refs.form.reset()
            },
            async onUpdateForm (event) {
                this.$swal({
                    title: 'Іде завантаження...',
                    text: '',
                    showConfirmButton: false
                })
                db.collection('pictures').doc(this.$route.params.id)
                    .update({
                        title: this.picture.title,
                        description: this.picture.description,
                        imageCode: this.picture.imageCode,
                        price: this.picture.price,
                    })
                    .then(() => {
                        console.log('Category of foto successfully updated!')
                        // this.$router.push('/list')
                    }).catch((error) => {
                    console.log(error)
                })

                const dbRef = await db.collection('pictures').doc(this.$route.params.id)
                dbRef.get().then((doc) => {
                    this.photo = doc.data()
                }).catch((error) => {
                    console.log(error)
                })
                try {
                    this.$swal('Успішно оновлено!!!')
                    this.photo.title = ''
                    this.photo.description = ''
                    this.photo.imageCode = ''
                    this.photo.price = ''
                } catch (error) {
                    console.log(error)
                }
            }
        }
    })
</script>

<style>
	label {
		color: #1393ae;
	}
</style>
