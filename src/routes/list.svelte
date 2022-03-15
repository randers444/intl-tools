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
	<title>List Format</title>
</svelte:head>

<Header title={'Formatting Lists'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.ListFormat</span>
		<span slot="subtitle">
			The <code>Intl.ListFormat</code> object enables language-sensitive list formatting.
		</span>
	</PageHeader>
	<PendingCard></PendingCard>
</PageContent>
