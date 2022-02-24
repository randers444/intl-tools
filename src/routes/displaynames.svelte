<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import PageContent from '$lib/layout/PageContent.svelte';
</script>

<svelte:head>
	<title>Display Names</title>
</svelte:head>

<Header title={''} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.DisplayNames</span>
		<span slot="subtitle">
			The <code>Intl.DateTimeFormat</code> object enables the consistent translation of language, region and script display names.
		</span>
	</PageHeader>
</PageContent>
