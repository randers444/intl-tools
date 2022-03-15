<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import { browser } from '$app/env';
	import { DATETIME_FORMAT_OPTIONS } from '../lib/datetime/datetime-options.config';
	import {
		parse_date,
		parse_time,
		format_date,
		format_time
	} from '../lib/datetime/datetime-input.utils';
	import { DatetimeState } from '$lib/datetime/datetime.state';
	import LocaleCard from '$lib/LocaleCard.svelte';
	import ResultCard from '$lib/ResultCard.svelte';
	import OptionsCard from '$lib/OptionsCard.svelte';
	import PageHeader from '$lib/layout/PageHeader.svelte';
	import PageContent from '$lib/layout/PageContent.svelte';
	import UsageCard from '$lib/UsageCard.svelte';

	const state = new DatetimeState();
	const result = state.display;
	const date = state.date;
	const code = state.code;

	function set_date(date: Date) {
		state.date.set(date);

		browser && localStorage?.setItem('user_date', date.toString());
	}
</script>

<svelte:head>
	<title>Datetime Formatter</title>
</svelte:head>

<Header title={'Formatting Dates and Times'} back={'/'} />
<Menu />

<PageContent>
	<PageHeader>
		<span slot="title">Intl.DateTimeFormat</span>
		<span slot="subtitle">
			The <code>Intl.DateTimeFormat</code> object enables language-sensitive date and time formatting.
		</span>
	</PageHeader>
	<p class="mt-2">
		<UsageCard code={$code} />
	</p>
	<div class="mb-4" />

	<ResultCard>{$result}</ResultCard>
	<div class="m-16" />
	<Card>
		<CardHeader>Date and Time</CardHeader>

		<div class="flex flex-row gap-4 mb-2">
			<div class="form-control w-64">
				<label class="label" for="date-picker">
					<span class="label-text">Date</span>
				</label>
				<input
					type="date"
					name="date-picker"
					class="input input-bordered"
					value={format_date($date)}
					on:change={(event) => {
						set_date(parse_date(event.currentTarget.value, $date));
					}}
				/>
			</div>

			<div class="form-control w-64">
				<label class="label" for="time-picker">
					<span class="label-text">Time</span>
				</label>
				<input
					type="time"
					name="time-picker"
					class="input input-bordered"
					value={format_time($date)}
					on:change={(event) => {
						set_date(parse_time(event.currentTarget.value, $date));
					}}
				/>
			</div>
		</div>
	</Card>

	<LocaleCard on:locale={(event) => state.locale.set(event.detail)} />

	<OptionsCard {state} options={DATETIME_FORMAT_OPTIONS} />
</PageContent>
