<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { page } from '$app/stores';
</script>

<Header />
<div class="error">
	<img src="/error_unixmib.png" alt="" />
	<div class="status">Errore {$page.status}</div>
</div>
<Footer />

<style lang="scss">
	@import '../lib/scss/404.scss';
	@import '../lib/scss/standard.scss';
</style>
