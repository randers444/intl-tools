<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import PageContent from '$lib/layout/PageContent.svelte';
import PendingCard from '$lib/PendingCard.svelte';
</script>

<svelte:head>
	<title>NumberFormat</title>
</svelte:head>

<Header title={'Formatting Numbers'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.NumberFormat</span>
		<span slot="subtitle">
			The <code>Intl.NumberFormat</code> object enables language-sensitive number formatting.
		</span>
	</PageHeader>
	<PendingCard></PendingCard>
</PageContent>
