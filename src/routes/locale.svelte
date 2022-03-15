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
	<title>Locale</title>
</svelte:head>

<Header title={''} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.Locale</span>
		<span slot="subtitle">
			The <code>Intl.Locale</code> object is a standard built-in property of the Intl object that represents a Unicode locale identifier.
		</span>
	</PageHeader>
	<PendingCard></PendingCard>
</PageContent>
