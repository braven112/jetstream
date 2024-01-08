<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import SideNav from './SideNav.svelte';

	import '../global.css';
	import '../global.scss';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
</script>

<div class="app">
	<!-- <Header /> -->

	<div class="main-container">
		<sidenav class="sidenav">
			<SideNav />
		</sidenav>

		<main>
			<slot />
		</main>
	</div>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style scoped>
	main {
		width: 100%;
		max-width: unset;
		overflow: auto;
		scroll-behavior: smooth;
		padding: 16px;
	}

	.main-container {
		display: flex;
		height: 100vh;
	}

	.sidenav {
		background-color: #eee;
		padding: 16px;
		overflow: auto;
		resize: horizontal;
	}
</style>
