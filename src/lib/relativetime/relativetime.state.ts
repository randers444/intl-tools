import { browser } from '$app/env';
import type { Readable, Writable } from '$lib/store.utils';
import { derived, get, writable } from "svelte/store";
import type {State} from '$lib/state'

export interface RelativeTime {
    offset: number;
    unit: Intl.RelativeTimeFormatUnit;
}


export class RelativetimeState implements State {
    locale: Writable<string>
    options: Writable<Intl.RelativeTimeFormatOptions>
    enabled: Writable<Set<string>>
    time: Writable<RelativeTime>
    display: Readable<string>
    code: Readable<string>

    constructor() {
        this.locale = writable<string>(new Intl.NumberFormat().resolvedOptions().locale)

        // const default_options = new Intl.RelativeTimeFormat().resolvedOptions() as Intl.RelativeTimeFormatOptions
        const default_options:Intl.RelativeTimeFormatOptions = {
    
        }
        this.options = writable<Intl.RelativeTimeFormatOptions>(
            default_options
        )

        this.enabled = writable<Set<string>>(new Set(Object.keys(default_options)))

        this.time = writable<RelativeTime>(this.default_time())

        this.display = derived([this.locale, this.options, this.time], ([l, o, t], set) => {
            const enabled_options = o;
            try {
                set(new Intl.RelativeTimeFormat(l, enabled_options).format(t.offset, t.unit))
            } catch (e) {
                set(e.toString())
            }

        }, "");

        this.code = derived([this.locale, this.options, this.time], ([l, o, t], set) => {
            set(`const result = new Intl.RelativetimeFormatter(\n\t'${l}', \n${JSON.stringify(o, null, 2).split('\n').map(line => '\t' + line).join('\n')}).format(${t.offset}, '${t.unit}'))`)
        });
    }

    private default_time(): RelativeTime {
        // if (browser) {
        //     const saved_Relative = window.localStorage.getItem('user_Relative');
        //     if (saved_Relative && saved_Relative !== 'Invalid Relative') {
        //         return new Relative(saved_Relative);
        //     }
        // }
        return {
            offset: 2,
            unit: 'day',
        };
    }

    set_option_value(value: Record<string, any>) {

        const next = { ...get(this.options), ...value };
        this.options.set(next);
    }

}
