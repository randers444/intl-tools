<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import PageContent from '$lib/layout/PageContent.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Header title={'Info about this site'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">About</span>
		<span slot="subtitle"> What is all this? </span>
	</PageHeader>

	<div class="prose">
		<h1 class="text-xl my-2">It's a handlful of related tools.</h1>
		<p>
			Personally, I was trying to use a few of the formatting options, and felt like I could use a
			visual way to test out the myriad of available formatting options. It started with the
			DateTimeFormat, for lib-less date formatting, but then I found use for some of the other ones
			too.
		</p>

		<h1 class="text-xl my-2 mt-6">It's an excuse.</h1>
		<p>It was a reasonable project to use to learn some Svelte. I'm still learning.</p>
	</div>
</PageContent>
