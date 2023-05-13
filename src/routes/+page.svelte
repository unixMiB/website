<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Events from '$lib/components/Events/Events.svelte';
	import About from '$lib/components/About/About.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import MemberShip from '$lib/components/MemberShip/MemberShip.svelte';
</script>

<Header />
<div class="homepage">
	<About />
	<MemberShip />
	<Events />
</div>
<Footer />

<style lang="scss">
	@import '../lib/scss/standard.scss';
	@import '../lib/scss/homepage.scss';
</style>
