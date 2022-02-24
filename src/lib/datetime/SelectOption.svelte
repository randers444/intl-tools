<script lang="ts">
	import type { SelectOption, SelectOptionEntry } from '$lib/config/options.config';
	import { createEventDispatcher } from 'svelte';


	export let option: SelectOption;
	 
	export let value: any;
	let _value: SelectOptionEntry = option.options.find(it => it.value === value) || option.options[0] || {value: value, label: value};

	export let enabled: boolean = false;

	const on_update = createEventDispatcher();

	const send_update = () => {
		on_update('value_changed', {
			[option.key]: enabled ? _value.value : undefined
		});
	};

	const set_value = (event) => {

		let v = event.currentTarget.value
		if (option.type === 'boolean') {
			v = v == 'true';
		}
		const next = option.options.find(it => it.value === v) || {label: v, value: v};
		
		_value = next

		send_update();
	};
</script>

<div class="flex flex-row items-end gap-8 mb-2">
	<div>
		<input
			type="checkbox"
			checked={enabled}
			class="checkbox checkbox-lg"
			on:change={(event) => {
				enabled = event.currentTarget.checked;

				if (!_value || _value.value == 'None') {
					_value = option.options[0];
				}
				send_update();
			}}
		/>
	</div>
	<div class="form-control w-72 my-1">
		<label class="label" for={option.key}>
			<span class="label-text">{option.name}</span>
			<span class="label-text-alt font-mono bg-base-200 px-2"> {option.key} </span>
		</label>

		{#if option.options.length}
			<select
				class="select select-bordered w-full"
				name={option.key}
				value={_value.value}
				on:change={set_value}
			>
				{#each option.options as option_e}
					<option value={option_e.value} class="capitalize">
						{option_e.label}
					</option>
				{/each}
			</select>
		{:else}
			<input
				type="text"
				class="input input-bordered"
				name={option.key}
				value={_value.value}
				on:change={set_value}
			/>
		{/if}
	</div>
</div>
