<template>
	<footer>
		<div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952960.3530958146!2d28.06617181472633!3d49.91513921396577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0YHRiywg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE4MDAw!5e0!3m2!1sru!2sua!4v1611081910710!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			<div>
				<div class="brand">
					{{ $t('address.value', { value: 'Україна м. Черкаси' }) }}
				</div>
				<div class="brand">{{ new Date().getFullYear() }} — Roman Kravchuk</div>
				<div class="brand">{{`+\n380962836665`}}</div>
			</div>
		</div>
	</footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
	/* Footer */
	footer {
		clear: both;
		padding-top: 50px;
		padding-bottom: 40px;
		text-align: center;
		background-color: #38404b;
		margin-top: 30px;
	}

	footer .brand {
		color: #bcc9dd;
	}

	footer .menu li {
		padding-left: 10px;
		padding-right: 10px;
	}

	footer .menu li a {
		color: #bcc9dd;
	}

	footer .menu {
		display: inline-block;
		margin-top: 30px;
		margin-bottom: 15px;
	}

	footer .copyright {
		font-size: 12px;
		color: #eee;
	}
</style>