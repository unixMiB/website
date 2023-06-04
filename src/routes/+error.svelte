<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>unixMiB - Errore {$page.status}</title>
</svelte:head>

<Header />
<div class="error">
	<img src="/img/error_unixmib.png" alt="" />
	<div class="status">Errore {$page.status}</div>
</div>
<Footer />

<style lang="scss">
	@import '../lib/scss/404.scss';
	@import '../lib/scss/standard.scss';
</style>
