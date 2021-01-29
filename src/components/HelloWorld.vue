<template>
<!--	Динамический компонент-->
<!--	<div>-->
<!--		<h1>O_o</h1>-->
<!--		<component :is="name"/>-->
<!--		<button @click="onClick">Click me !</button>-->
<!--	</div>-->


<!--	Ленивый компонент-->
<!--	<div id="nav">-->
<!--		<button @click="sh = !sh">{{ sh }}</button>-->
<!--		<p v-if="sh">Про мене</p>-->
<!--		<about v-if="sh" />-->
<!--	</div>-->



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
				<CategoriesPhotoCard :picture="picture"/>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { db } from '../main'
import firebase from 'firebase/app'
import 'firebase/storage'
import CategoriesPhotoCard from './CategoriesPhotoCard.vue'
import { defineAsyncComponent, defineComponent } from "vue"

export default defineComponent({
  name: 'HelloWorld',
	components: {
			CategoriesPhotoCard,
      about: defineAsyncComponent(() => import("../views/About.vue")),
	},
	data: () => ({
      boardFields: [],
			sh: false
	}),
	setup () {
      const isShow = ref(false);
      const name = computed (() => isShow.value ? defineAsyncComponent(() => import("../views/AddPicture.vue")) : '')


      const onClick = () => {
          isShow.value = !isShow.value;
      }
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
        })
      return {
          arrayPictures,
          onClick,
          name,
          isShow
      }
  }
})
</script>


<style lang="scss">
	[v-cloak] {
		display: block;
		padding: 50px 0;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}

	&:before {
		 content: '';
		 box-sizing: border-box;
		 position: absolute;
		 top: 50%;
		 left: 50%;
		 width: 20px;
		 height: 20px;
		 margin-top: -10px;
		 margin-left: -10px;
		 border-radius: 50%;
		 border: 2px solid #ccc;
		 border-top-color: #333;
		 animation: spinner .6s linear infinite;
		 text-indent: 100%;
		 white-space: nowrap;
		 overflow: hidden;
	 }

	& > div {
			display: none;
		}
	}

</style>



