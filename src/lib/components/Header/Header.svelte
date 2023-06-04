<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { setCookie, getCookie } from '../../helpers/cookieHelper';
	import menu from '$lib/data/menu';

	let hamburgerOpen = false;
	let darkModeIcon = '';
	let darkMode = 'light';
	let logo = `/img/logos/logo_${darkMode}.png`;

	const today = new Date();

	function selectLogo() {
		if (today.getMonth() == 5) {
			return `/img/logos/logo_pride_${darkMode}.png`;
		} else {
			return `/img/logos/logo_${darkMode}.png`;
		}
	}

	page.subscribe((value) => {
		if (value.url.hash) {
			hamburgerOpen = false;
		}
	});

	onMount(() => {
		darkMode = getCookie('darkMode') || 'light';

		logo = selectLogo();

		if (darkMode === 'dark') {
			setMode();
		}
	});

	function changeMode() {
		darkMode = darkMode === 'light' ? 'dark' : 'light';

		setMode();
	}

	function setMode() {
		logo = selectLogo();

		darkModeIcon = darkMode === 'light' ? '' : '';
		setCookie('darkMode', darkMode, 365);
		document.querySelector('html')?.setAttribute('data-theme', darkMode);
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
