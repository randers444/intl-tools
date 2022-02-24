<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import { createEventDispatcher } from 'svelte';

	const on_update = createEventDispatcher();
    export let value = '';
    let lines = [];

    function push_update(v: string){
        value = v;
        lines = v.split('\n').filter(l => !!l);
        on_update('text', lines);
    }
</script>

<Card>
	<CardHeader>Items</CardHeader>
	<div class="form-control w-full max-w-xs">
		<textarea
			name="items"
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full max-w-xs"
			rows="5"
			style="height: unset"
			on:change={(event) => push_update(event.currentTarget.value)}
		/>
		<label class="label" for="items">
			<span class="label-text-alt">Separate items by line</span>
			<span class="label-text-alt">{lines.length} lines</span>
		</label>
	</div>
</Card>
