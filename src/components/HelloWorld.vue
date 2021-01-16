<template>
	<div class="container" style="margin-top: 50px">
		<div class="row row-cols-1 row-cols-md-2 g-4">
			<div v-for="picture in pictures" :key="picture.title">
				<div class="col">
					<div class="card h-100">
						<img
								:src=picture.image
								:class=picture.class
								alt=""
						>
						<div class="card-body">
							<h5 class="card-title">{{picture.title}}</h5>
							<p class="card-text">{{picture.price}}</p>
						</div>
						<router-link :to="{ name: 'edit_picture', params: { id: 'erina' }}">
							детальніше...
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import router from "../router"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
			pictures: [
					{
					    title: 'Bloom',
							price: '285$',
							image: "https://drive.google.com/uc?export=view&id=1MOJ5zc6Ms46YTtp42iGfEWa-hzgXR8SL",
							class: 'card-img-top'
					},
          {
              title: 'Bloom',
              price: '285$',
              image: "https://drive.google.com/uc?export=view&id=1MOJ5zc6Ms46YTtp42iGfEWa-hzgXR8SL",
              class: 'card-img-top'
          },
          {
              title: 'Bloom',
              price: '285$',
              image: "https://drive.google.com/uc?export=view&id=1MOJ5zc6Ms46YTtp42iGfEWa-hzgXR8SL",
              class: 'card-img-top'
          },
          {
              title: 'Bloom',
              price: '285$',
              image: "https://drive.google.com/uc?export=view&id=1MOJ5zc6Ms46YTtp42iGfEWa-hzgXR8SL",
              class: 'card-img-top'
          }
			]
    }
  },
}
</script>

