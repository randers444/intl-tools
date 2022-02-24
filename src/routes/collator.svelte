<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { CollatorState } from '$lib/collator/collator.state';
	import Header from '$lib/Header.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import ListItemsCard from '$lib/ListItemsCard.svelte';
	import LocaleCard from '$lib/LocaleCard.svelte';
	import Menu from '$lib/Menu.svelte';
	import OptionsCard from '$lib/OptionsCard.svelte';
	import ResultCard from '$lib/ResultCard.svelte';
	import { COLLATOR_FORMAT_OPTIONS } from '../lib/collator/collator-options.config';


	const state = new CollatorState();
	const result = state.display;
</script>

<svelte:head>
	<title>Collator</title>
</svelte:head>

<Header title={'Collator'} back={'/'} />
<Menu />

<section class="ml-64 mt-16 bg-base-200 p-8" id="header">
	<PageHeader>
		<span slot="title">Intl.Collator</span>
		<span slot="subtitle">
			The <code>Intl.Collator</code> object enables language-sensitive comparisons.
		</span>
	</PageHeader>

	

	<ResultCard>{$result}</ResultCard>

	<LocaleCard on:locale={(event) => state.locale.set(event.detail)} />

	<ListItemsCard on:text={(event) => state.text.set(event.detail)}/>

	<OptionsCard {state} options={COLLATOR_FORMAT_OPTIONS} />
</section>
