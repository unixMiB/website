<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Event from '$lib/components/Event/Event.svelte';
	import { featuredEvents, events } from '$lib/data/events';

	let filteredEvents = featuredEvents.filter((event) => {});
</script>

<svelte:head>
	<title>unixMiB - Eventi</title>
</svelte:head>

<Header />
<div class="events">
	<div class="container">
		<div class="title">In primo piano</div>
	</div>

	<div class="featured-list">
		{#each featuredEvents as event}
			<Event {...event} />
		{/each}
	</div>

	<div class="container">
		<div class="title">Tutti gli eventi</div>
	</div>

	<div class="events-list">
		{#each events as event}
			<Event {...event} />
		{/each}
	</div>
</div>
<Footer />

<style lang="scss">
	@import '$lib/scss/standard.scss';
	@import '$lib/scss/events.scss';
</style>
