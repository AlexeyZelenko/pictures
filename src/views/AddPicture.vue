<template>
	<div
			style="margin: 10px"
			class="row justify-content-center"
	>
		<div class="col-md-5">
			<h3 class="text-center">Додати картину</h3>
			<form
					@submit.prevent="onFormSubmit"
			>
				<div
						class="form-group"
				>
					<label>Назва</label>
					<input
							type="text"
							class="form-control"
							v-model="photo.title"
							required
					>
				</div>

				<div class="form-group">
					<label>Опис</label>
					<input
							type="text"
							class="form-control"
							v-model="photo.description"
							required
					>
				</div>
				<div class="form-group">
					<label>Ціна</label>
					<input
							type="text"
							class="form-control"
							v-model="photo.price"
							required
					>
				</div>
				<div class="form-group">
					<label>посилання Google disk</label>
					<input
							type="text"
							class="form-control"
							v-model="photo.imageCode"
							required
					>
				</div>

				<div
						style="margin: 10px"
						class="form-group"
				>
					<button class="btn btn-primary btn-block">Додати</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
    import { db } from '../main.js'
    // import 'firebase/storage'
    import firebase from 'firebase/app'

    export default {
        name: 'AddPicture',
        data () {
            return {
                File: [],
                photo: {}
            }
        },
        methods: {
            previewFiles (event) {
                // process your files, read as DataUrl or upload...
                this.File = event.target.files
                console.log(event.target.files)

                // if you need to re-use field or drop the same files multiple times
                // this.$refs.form.reset()
            },

            async onFormSubmit (event) {
                this.$swal({
                    title: 'Іде завантаження...',
                    text: '',
                    showConfirmButton: false
                })
                await db.collection('pictures')
                    .add({
                        title: this.photo.title,
                        description: this.photo.description,
                        imageCode: this.photo.imageCode,
                        price: this.photo.price
                    })
                try {
                    this.$swal('Успішно створенно!!!')
                    this.photo.title = ''
                    this.photo.description = ''
                    this.photo.imageCode = ''
                    this.photo.price = ''
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
