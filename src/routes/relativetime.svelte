<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import { RELATIVE_TIME_FORMAT_OPTIONS } from '../lib/relativetime/relativetime-options.config';
	import LocaleCard from '$lib/LocaleCard.svelte';
	import ResultCard from '$lib/ResultCard.svelte';
	import OptionsCard from '$lib/OptionsCard.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import { RelativetimeState } from '$lib/relativetime/relativetime.state';
	import PageContent from '$lib/layout/PageContent.svelte';

	const state = new RelativetimeState();
	const result = state.display;

	let unit = 'minute';
	const units = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second'];
	state.time.subscribe(({ unit: _unit }) => (unit = _unit));

	let value = 0;
	state.time.subscribe(({ offset }) => (value = offset));

	function set_value(value: number) {
		state.time.update((current) => ({ ...current, offset: value }));
	}

	function set_unit(unit: string) {
		state.time.update((current) => ({ ...current, unit: unit as Intl.RelativeTimeFormatUnit }));
	}
</script>

<svelte:head>
	<title>Relative Time Formatter</title>
</svelte:head>

<Header title={'Formatting Relative Times'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.RelativeTimeFormat</span>
		<span slot="subtitle">
			The <code>Intl.RelativeTimeFormat</code> object enables language-sensitive relative time formatting.
		</span>
	</PageHeader>

	<ResultCard>{$result}</ResultCard>
	<div class="m-16" />
	<Card>
		<CardHeader>Relative Time</CardHeader>

		<div class="form-control w-72 mb-4">
			<label class="label" for="unit">
				<span class="label-text">Value</span>
			</label>
			<input
				type="range"
				min="-3"
				max="3"
				{value}
				on:change={(event) => set_value(+event.currentTarget.value)}
				class="range"
				step="1"
			/>
			<div class="w-full flex justify-between text-xs px-1">
				<span class="w-2">-3</span>
				<span class="w-2">-2</span>
				<span class="w-2">-1</span>
				<span class="w-2">0</span>
				<span class="w-2">1</span>
				<span class="w-2">2</span>
				<span class="w-2">3</span>
			</div>
		</div>

		<div class="form-control w-72 my-2">
			<label class="label" for="unit">
				<span class="label-text">Unit</span>
			</label>
			<select
				class="select select-bordered w-full"
				name="unit"
				value={unit}
				on:change={(event) => set_unit(event.currentTarget.value)}
			>
				{#each units as unit_option}
					<option value={unit_option}>
						{unit_option}
					</option>
				{/each}
			</select>
		</div>
	</Card>

	<LocaleCard on:locale={(event) => state.locale.set(event.detail)} />

	<OptionsCard {state} options={RELATIVE_TIME_FORMAT_OPTIONS} />
</PageContent>
