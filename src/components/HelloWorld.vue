<template>
	<div class="container" style="margin-top: 50px">
		<div class="row row-cols-1 row-cols-md-2 g-4">
			<div v-for="picture in arrayPictures" :key="picture.title">
				<div class="col">
					<div class="card h-100">
						<img
								:src="`https://drive.google.com/uc?export=view&id=${picture.imageCode}`"
								:class=picture.class
								alt=""
						>
						<div class="card-body">
							<h5 class="card-title">{{picture.title}}</h5>
							<p class="card-text">{{picture.price}} $</p>
						</div>
						<router-link
								style="margin-bottom: 10px;"
								:to="{ name: 'edit_picture', params: { id: picture.key }}"
						>
							детальніше...
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from 'vue'
import { db } from '../main'
import firebase from 'firebase/app'
import 'firebase/storage'

export default {
  name: 'HelloWorld',
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

