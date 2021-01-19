<template>
	<div>
		<select
				class="select"
				v-model="$i18n.locale"
		>
			<option
					v-for="(lang, i) in langs"
					:key="`lang-${i}`"
					:value="lang">
				{{ lang }}
			</option>
		</select>
	</div>
</template>

<script>
    export default {
        name: 'SwitchLocale',
        data() {
            return { langs: ['en', 'ru', 'ua'] }
        }
    }
</script>

<style>
	.select {
		width: 100px;
		line-height: 49px;
		height: 30px;
		font-size: 20px;
		outline: 0;
		margin-top: 10px;
		margin-bottom: 12px;
		opacity: 0.4;
	}
</style>