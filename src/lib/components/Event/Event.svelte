<script lang="ts">
	import { scale } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let date: string;
	export let cover: string;

	const backgroundImage = cover ? cover : '';
</script>

<div
	class="event swiper-slide"
	style="background-image: url('{backgroundImage}');"
	in:scale={{ duration: 500, delay: 100 }}
>
	<h2 class="title">
		{title ? title : ''}
	</h2>
	<p class="description">
		{description ? description : ''}
	</p>
	<p class="date">
		{date ? date : ''}
	</p>
</div>

<style lang="scss">
	@import './event.scss';
</style>
