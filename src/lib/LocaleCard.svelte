<script lang="ts">

	import Card from '$lib/layout/Card.svelte';
	import CardHeader from '$lib/layout/CardHeader.svelte';
    import { createEventDispatcher } from 'svelte';

	let locale_description = '';
	let user_locale = (locale_description = new Intl.NumberFormat().resolvedOptions().locale);

    const on_update = createEventDispatcher();

</script>

<Card>
    <CardHeader>Locale</CardHeader>

    <div class="form-control w-64">
        <input
            type="text"
            name="locale"
            class="input input-bordered"
            value={user_locale}
            on:change={(event) => {
                user_locale = event.currentTarget.value;
                on_update('locale', event.currentTarget.value);
            }}
        />
        <label class="label" for="locale">
            <span class="label-text-alt">Browser Locale: {locale_description} </span>
        </label>
    </div>
</Card>