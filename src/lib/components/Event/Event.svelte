<script lang="ts">
	import { scale } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let date: string;
	export let cover: string;
	export let link: string;

	const backgroundImage = cover ? cover : '';
</script>

<a
	class="event swiper-slide {link ? 'clickable' : ''}"
	style="background-image: url('{backgroundImage}');"
	in:scale={{ duration: 500, delay: 100 }}
	href={link}
	target="_blank"
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
</a>

<style lang="scss">
	@import './event.scss';
</style>
