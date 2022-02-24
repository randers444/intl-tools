<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import type { State } from '$lib/state';
	import type { SelectOptions } from '$lib/config/options.config';
	import SelectOption from './datetime/SelectOption.svelte';
	import { get } from 'svelte/store';

	export let options: SelectOptions;
	export let state: State;
	const _options = Object.values(options);
</script>

<Card>
	<CardHeader>Options</CardHeader>
	<div>
		{#each _options as option}
			<SelectOption
				value={get(state.options)[option.key]}
				enabled={get(state.enabled).has(option.key)}
				{option}
				on:value_changed={(event) => {
					state.set_option_value(event.detail);
				}}
			/>
		{/each}
	</div>
</Card>
