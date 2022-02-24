import type { SelectOptions } from '../config/options.config';

type RelativeOptionKey = keyof Intl.RelativeTimeFormatOptions
type RelativeOptions = Intl.RelativeTimeFormatOptions
type RelativeSelectOptions = SelectOptions<RelativeOptions>

function ditto<K extends RelativeOptionKey = RelativeOptionKey>(options: Intl.RelativeTimeFormatOptions[K][]): { value: Intl.RelativeTimeFormatOptions[K], label: string }[] {
    return options.map(value => ({ value, label: value.toString() }))
}

export const RELATIVE_TIME_FORMAT_OPTIONS: RelativeSelectOptions = {
    localeMatcher: {
        name: 'Locale Matcher',
        key: 'localeMatcher',
        options: ditto<'localeMatcher'>(['best fit', 'lookup'])
    },
    numeric: {
        name: 'Numeric',
        key: 'numeric',
        options: ditto<'numeric'>(['auto', 'always'])
    },
    style: {
        name: 'Style',
        key: 'style',
        options: ditto<'style'>(['long', 'short', 'narrow'])
    }
}