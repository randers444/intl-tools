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
	<title>Segmenter</title>
</svelte:head>

<Header title={''} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.Segmenter</span>
		<span slot="subtitle">
			The <code>Intl.Segmenter</code> object enables locale-sensitive text segmentation, enabling you
			to get meaningful items (graphemes, words or sentences) from a string.
		</span>
	</PageHeader>
</PageContent>
