<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
	import { highlight } from './highlight';

	export let code: string;

	let rendered: string = code;

	$: {
		rendered = highlight(code);
	}
</script>

<Card>
	<CardHeader>Usage</CardHeader>
	<pre>
		<code class="language-js hljs rounded-lg">{@html rendered}</code>
	</pre>
</Card>
