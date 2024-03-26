<script lang="ts">
	const year = new Date().getFullYear();
	let cssSentence = 'Rimuovi CSS';

	function removeCSS() {
		document.querySelectorAll('style')?.forEach((style) => {
			style.remove();
		});

		cssSentence = "Perché l'hai fatto?";
	}

	function rgbTheme() {
		document
			.querySelector('html')
			?.setAttribute(
				'data-rgb',
				document.querySelector('html')?.getAttribute('data-rgb') === 'true' ? 'false' : 'true'
			);
	}
</script>

<div class="footer">
	<div class="container">
		Copyleft {year} - unixMiB
	</div>

	<!-- <button class="removeCSS" on:click={removeCSS}>{cssSentence}</button> -->
	<button class="rgb" on:click={rgbTheme}>RGB</button>
</div>

<style lang="scss">
	@import './footer.scss';
</style>
