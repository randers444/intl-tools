<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { CollatorState } from '$lib/collator/collator.state';
	import Header from '$lib/Header.svelte';
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import PageContent from '$lib/layout/PageContent.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import LocaleCard from '$lib/LocaleCard.svelte';
	import Menu from '$lib/Menu.svelte';
	import ResultCard from '$lib/ResultCard.svelte';

	const state = new CollatorState();

	let value: number = 1;
	let result = "";
	let locale = "";

	function update(){
		result = new Intl.PluralRules([], {}).select(value);
	}
</script>

<svelte:head>
	<title>PluralRules</title>
</svelte:head>

<Header title={'Plural'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.PluralRules</span>
		<span slot="subtitle">
			The <code>Intl.PluralRules</code> object enables plural-sensitive formatting and plural-related
			language rules.
		</span>
	</PageHeader>

	<ResultCard>{result}</ResultCard>

	<LocaleCard on:locale={(event) => state.locale.set(event.detail)} />

	<Card>
		<CardHeader>Count</CardHeader>

		<div class="form-control w-72 my-1">
			<!-- <label class="label" for=count>
				<span class="label-text">{option.name}</span>
				<span class="label-text-alt font-mono bg-base-200 px-2"> {option.key} </span>
			</label>
	 -->
			
				<input
					type="number"
					class="input input-bordered"
					name=count
					value={value}
					on:change={(event) => {
						value = +event.currentTarget.value;
						update();
					}}
				/>
		</div>
	</Card>
</PageContent>
