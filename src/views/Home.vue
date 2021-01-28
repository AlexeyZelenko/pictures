<template>
	<keep-alive>
		<HelloWorld/>
	</keep-alive>
</template>

<script>
    import { defineComponent } from 'vue'
    import HelloWorld from '../components/HelloWorld.vue'

    export default defineComponent({
        name: 'Home',
        components: {
            HelloWorld
        }
    })
</script>