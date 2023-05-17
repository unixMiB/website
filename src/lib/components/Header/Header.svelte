<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { setCookie, getCookie } from '../../helpers/cookieHelper';
	import menu from '$lib/data/menu';

	let hamburgerOpen = false;
	let darkModeIcon = '';
	let logo = '/logo_light.png';

	page.subscribe((value) => {
		if (value.url.hash) {
			hamburgerOpen = false;
		}
	});

	onMount(() => {
		const darkMode = getCookie('darkMode');
		if (darkMode === 'dark') {
			changeMode();
		}
	});

	function changeMode() {
		darkModeIcon = darkModeIcon === '' ? '' : '';
		logo = darkModeIcon === '' ? '/logo_light.png' : '/logo_dark.png';

		setCookie('darkMode', darkModeIcon === '' ? 'light' : 'dark', 365);

		document
			.querySelector('html')
			?.setAttribute('data-theme', darkModeIcon === '' ? 'light' : 'dark');
	}
</script>

<nav>
	<a href="/" class="logo">
		<img src={logo} alt="logo" />
	</a>

	<button class="hamburger" on:click={() => (hamburgerOpen = true)}>󰍜</button>
	<div class="menu">
		{#each menu as link}
			<a href={link.url}>{link.name}</a>
		{/each}
	</div>

	<div class="dark-mode">
		<button on:click={() => changeMode()}>{darkModeIcon}</button>
	</div>

	{#if hamburgerOpen}
		<div class="mobile-menu" in:fly={{ x: 600 }} out:fly={{ x: 600 }}>
			<button class="close" on:click={() => (hamburgerOpen = false)}></button>
			<div class="dark-mode-mobile">
				<button on:click={() => changeMode()}>{darkModeIcon}</button>
			</div>
			{#each menu as link}
				<a href={link.url}>{link.name}</a>
			{/each}
		</div>
	{/if}
</nav>

<div class="header-spacing" />

<style lang="scss">
	@import './header.scss';
</style>
