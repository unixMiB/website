<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	import contacts from '$lib/data/contacts';
</script>

<svelte:head>
	<title>unixMiB - Contatti</title>
</svelte:head>

<Header />
<div class="contacts">
	<div class="title">Contatti</div>

	<ul>
		{#each contacts as contact}
			<li>
				<div class="icon">{contact.icon}</div>
				<a href={contact.link} target="_blank">
					{contact.name}
				</a>
			</li>
		{/each}
	</ul>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.7547757647907!2d9.211712776256832!3d45.51312538385504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c747f8f0de01%3A0x54b8d5b5d925b715!2sEdificio%20Atlas%20(Ex%20U1)%20-%20Universit%C3%A0%20Milano%20Bicocca!5e0!3m2!1sit!2sit!4v1683993480702!5m2!1sit!2sit"
		width="600"
		height="450"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>
<Footer />

<style lang="scss">
	@import '$lib/scss/standard.scss';
	@import '$lib/scss/contacts.scss';
</style>
