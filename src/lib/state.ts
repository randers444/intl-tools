import type { Readable, Writable } from '$lib/store.utils';


export interface State {
    locale: Writable<string>
    options: Writable<Intl.DateTimeFormatOptions>;
    enabled: Writable<Set<string>>;
    display: Readable<string>;

    set_option_value(value: Record<string, any>);
}
