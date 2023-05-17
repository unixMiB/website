<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import Event from '../Event/Event.svelte';
	import { featuredEvents } from '$lib/data/events';

	onMount(() => {
		new Swiper('.events-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 1
				},
				1200: {
					slidesPerView: 2
				},
				1600: {
					slidesPerView: 3
				}
			}
		});
	});
</script>

<div class="events">
	<div class="container">
		<div class="title">Eventi</div>
	</div>

	<div class="swiper events-slider">
		<div class="swiper-wrapper">
			{#each featuredEvents as event}
				<Event {...event} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import './events.scss';
</style>
