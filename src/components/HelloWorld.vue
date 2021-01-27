<template>
	<div
			class="container"
			style="margin-top: 50px"
	>
		<div
				class="row row-cols-1 row-cols-md-2 g-4 "
				v-for="picture in arrayPictures"
				:key="picture.key"
				style="justify-content: center"
		>
			<div class="col p-4">
				<router-link
						style="text-decoration: none"
						:to="{ name: 'edit_picture', params: { id: picture.key }}"
				>
					<CategoriesPhotoCard :picture="picture"/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from 'vue'
import { db } from '../main'
import firebase from 'firebase/app'
import 'firebase/storage'
import CategoriesPhotoCard from './CategoriesPhotoCard.vue'

export default {
  name: 'HelloWorld',
	components: {
			CategoriesPhotoCard
	},
	setup () {
        const arrayPictures = ref([])

        db.collection('pictures').onSnapshot((snapshotChange) => {
            arrayPictures.value = []

            snapshotChange.forEach((doc) => {
                arrayPictures.value.push({
                    key: doc.id,
                    title: doc.data().title,
                    price: doc.data().price,
                    image: doc.data().image,
                    imageCode: doc.data().imageCode,
                    description: doc.data().description,
                })
            })
            console.log(arrayPictures.value)
        })
      return {
          arrayPictures,
      }
  }
}
</script>



