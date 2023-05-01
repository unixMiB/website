<script lang="ts">
	import { onMount } from 'svelte';
	console.log('events');
	import Swiper from 'swiper';
	import 'swiper/css';
	import Event from '../Event/Event.svelte';

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

	// ! TODO Eliminare questo mock
	const events = [
		{
			cover: '/img/git-it-done.png',
			date: '28/04/2023'
		},
		{
			title: 'Vieni in assemblea!',
			description:
				'Vieni a trovarci in assemblea per discutere delle prossime iniziative e per conoscere meglio il nostro gruppo. Ti aspettiamo!',
			date: 'Tutti i mercoledì alle 10:30'
		},
		{
			title: 'Linux Day Milano 2023',
			description:
				"Una giornata di talk e workshop per conoscere il mondo Linux e opensource. L'evento è gratuito e aperto a tutti.",
			date: 'Da definire'
		},
		{
			title: 'Evento 4',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
			date: '01/10/2023'
		}
	];
</script>

<div class="container">
	<div class="title">Eventi</div>
</div>

<div class="swiper events-slider">
	<div class="swiper-wrapper">
		{#each events as event}
			<Event {...event} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import './events.scss';
</style>
