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
							v-model="photo.image"
							required
					>
				</div>
				<!--Фотографии-->
<!--				<div-->
<!--						style="margin: 10px"-->
<!--						ref="form"-->
<!--				>-->
<!--					<input-->
<!--							type="file"-->
<!--							name="file-upload"-->
<!--							multiple=""-->
<!--							@change="previewFiles"-->
<!--							accept="image/jpeg, image/png"-->
<!--							tabindex="-1"-->
<!--					>-->
<!--				</div>-->

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

                // ЗАГРУЗКА ФОТО
                // const promises = []
                // const promisesName = []
                // const File = this.File
								//
								//
                // if (File) {
                //     for (let i = 0; i < File.length; i++) {
                //         const storageRef = firebase.storage().ref()
                //         console.log(4324)
                //         // Загрузить файл и метаданные в объект 'assets/images/***.jpg'
								//
                //         // Создайте метаданные файла
                //         const metadata = {
                //             contentType: 'image/jpeg'
                //         }
                //         const nameTime = +new Date() + '.jpg'
                //         // ПРОВЕРКА ЗАГРУЗКИ ФОТО
								//
                //         await storageRef.child(`${this.photo.name}/` + nameTime)
                //         try {
                //             await storageRef.child(`${this.photo.name}/` + nameTime).put(File[i], metadata)
                //         } catch (e) {
                //             console.log(e.message)
                //         }
								//
                //         try {
                //             promises.push(
                //                 await storageRef.child(`${this.photo.name}/` + nameTime).getDownloadURL()
                //             )
                //             promisesName.push(
                //                 nameTime
                //             )
                //         } catch (e) {
                //             console.log(e.message)
                //         }
                //     }
                // }
								//
                // const arrayImages = await Promise.all(promises)
                // const NameImages = await Promise.all(promisesName)
								//
                // event.preventDefault()
                await db.collection('pictures')
                    .add({
                        title: this.photo.title,
                        description: this.photo.description,
                        image: this.photo.image,
                        price: this.photo.price
                    })
                try {
                    this.$swal('Успішно створенно!!!')
                    this.photo.title = ''
                    this.photo.description = ''
                    this.photo.image = ''
                    this.photo.price = ''
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
