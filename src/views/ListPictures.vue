<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-12">
				<table class="table table-striped">
					<thead>
					<tr>
						<th>Фото</th>
						<th>Назва</th>
						<th>Опис</th>
						<th>Ціна</th>
						<th>Дії</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="picture in Pictures" :key="picture.key">
						<td >
							<img
									style="max-width: 50px"
									:src="`https://drive.google.com/uc?export=view&id=${picture.imageCode}`"
									alt=""
							>
						</td>
						<td>{{ picture.title }}</td>
						<td>{{ picture.description }}</td>
						<td>{{ picture.price }}</td>
						<td>
							<router-link
									:to="{name: 'edit', params: { id: picture.key }}"
							>
								<button
										type="button"
										class="btn btn-primary"
										tabindex="-1" role="button"
								>
									Редагувати
								</button>
							</router-link>
							<button
									@click.prevent="deletePhoto(picture)"
									type="button"
									class="btn btn-outline-danger"
									style="margin: 5px"
							>
								Видалити
							</button>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
    import { ref } from 'vue'
    import { db } from '../main.js'
    import 'firebase/storage'
    import firebase from 'firebase/app'

    export default {
        setup () {
            const Pictures = ref([])

            db.collection('pictures').onSnapshot((snapshotChange) => {
                Pictures.value = []
                snapshotChange.forEach((doc) => {
                    Pictures.value.push({
                        key: doc.id,
                        title: doc.data().title,
                        price: doc.data().price,
                        image: doc.data().image,
                        imageCode: doc.data().imageCode,
                        description: doc.data().description,
                    })
                })
            })

            const deletePhoto = (picture) => {
                if (window.confirm('Ви дійсно хочете видалити?')) {
                    const File = picture.arrayImages

                    if (File) {
                        for (let i = 0; i < File.length; i++) {
                            const storageRef = firebase.storage().ref()
                            const nameTime = picture.NameImages[i]
                            const Ref = storageRef.child(`${picture.name}/` + nameTime)

                            Ref.delete()
                                .then(() => {
                                    console.log('удаление фото со всем объявлением')
                                })
                                .catch((error) => {
                                    console.log(error)
                                })
                        }
                    }
                    db.collection('pictures')
                        .doc(picture.key)
                        .delete()
                        .then(() => {
                            console.log('Документ видалено!')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
            }
            return {
                Pictures,
                deletePhoto
            }
        }
    }
</script>

