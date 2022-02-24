import type { State } from "$lib/state";
import type { Writable, Readable } from "$lib/store.utils";
import { derived, get, writable } from "svelte/store";

export class CollatorState implements State {
    options: Writable<Intl.DateTimeFormatOptions>;
    locale: Writable<string>;
    enabled: Writable<Set<string>>;
    display: Readable<string>;

    text: Writable<string[]>;

    constructor() {
        this.options = writable<Intl.DateTimeFormatOptions>(
            {}
        )
        this.enabled = writable<Set<string>>(new Set(Object.keys({})));
        this.locale = writable<string>(new Intl.NumberFormat().resolvedOptions().locale)
        this.text = writable([]);
        this.display = derived([this.text, this.locale, this.options], ([t, l, o], set) => {
            set(t.sort(new Intl.Collator(l, o).compare).join(', '));
        });
    }

    set_option_value(value: Record<string, any>) {

        const next = { ...get(this.options), ...value };
        this.options.set(next);
    }
}