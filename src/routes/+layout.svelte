<script>
	import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
	import en from '$lib/langs/en.json';
	import '$lib/helpers/http';
	import { onMount } from 'svelte';
	import { loaderStore } from '$lib/helpers/store';
	import Loader from '$lib/common/Loader.svelte';

	addMessages('en', en);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
	/**
	 * @type {boolean}
	 */
	let isLoading;
	onMount(() => {
		window?.speechSynthesis?.cancel();
		const subscribe = loaderStore.subscribe(value => {
			isLoading = value;
		});
	})
</script>
{#if isLoading}
	<Loader size={50}/>
{/if}
<slot />

<style lang="scss">
	@import '$lib/scss/bootstrap.scss';
	@import '$lib/scss/app.scss';
	@import '$lib/scss/icons.scss';
</style>