import { browser } from '$app/env';
import type { Readable, Writable } from '$lib/store.utils';
import { derived, get, writable } from "svelte/store";
import type {State} from '$lib/state'


export class DatetimeState implements State {
    locale: Writable<string>
    options: Writable<Intl.DateTimeFormatOptions>
    enabled: Writable<Set<string>>
    date: Writable<Date>
    display: Readable<string>
    code: Readable<string>

    constructor() {
        this.locale = writable<string>(new Intl.NumberFormat().resolvedOptions().locale)

        // const default_options = new Intl.DateTimeFormat().resolvedOptions() as Intl.DateTimeFormatOptions
        const default_options:Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }
        this.options = writable<Intl.DateTimeFormatOptions>(
            default_options
        )

        this.enabled = writable<Set<string>>(new Set(Object.keys(default_options)))

        this.date = writable<Date>(this.default_date())

        this.display = derived([this.locale, this.options, this.date], ([l, o, d], set) => {
            const enabled_options = o;
            try {
                set(new Intl.DateTimeFormat(l, enabled_options).format(d))
            } catch (e) {
                set(e.toString())
            }

        }, "");

        this.code = derived([this.locale, this.options, this.date], ([l, o, d], set) => {
            set(`const result = new Intl.DateTimeFormat(\n\t'${l}', \n${JSON.stringify(o, null, 2).split('\n').map(line => '\t' + line).join('\n')}).format(new Date('${d.toISOString()}'))`)
        });
    }

    private default_date() {
        if (browser) {
            const saved_date = window.localStorage.getItem('user_date');
            if (saved_date && saved_date !== 'Invalid Date') {
                return new Date(saved_date);
            }
        }
        return new Date();
    }

    set_option_value(value: Record<string, any>) {

        const next = { ...get(this.options), ...value };
        this.options.set(next);
    }

}
