<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	import Header from '$lib/Header.svelte';

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header title="Intl Tools"/>
<Menu />

<section class="ml-64 bg-base-200">
	<div class="hero min-h-screen">
		<div class="text-center hero-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Intl Tools</h1>
				<p class="mb-5">
					The Internationalization API is pretty cool. Here's a few tools to play around with it.
				</p>
				<p class="mb-10">
					Obviously this is still in progress.
				</p>
				<p>Here's the <a class="link link-primary" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">MDN Docs</a> for more info.</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
