import type { SelectOptions } from '../config/options.config';

type CollatorOptionKey = keyof Intl.CollatorOptions
type CollatorOptions = Intl.CollatorOptions
type CollatorSelectOptions = SelectOptions<CollatorOptions>

function ditto<K extends CollatorOptionKey = CollatorOptionKey>(options: Intl.CollatorOptions[K][]): { value: Intl.CollatorOptions[K], label: string }[] {
    return options.map(value => ({ value, label: value.toString() }))
}


export const COLLATOR_FORMAT_OPTIONS: CollatorSelectOptions = {
    caseFirst: {
        name: "Case First",
        key: "caseFirst",
        options: ditto<'caseFirst'>(['upper', 'lower', 'false'])
    },
    localeMatcher: {
        name: 'Locale Matcher',
        key: 'localeMatcher',
        options: ditto<'localeMatcher'>(['best fit', 'lookup'])
    },
    usage: {
        name: 'Usage',
        key: 'usage',
        options: ditto<'usage'>(['sort', 'search'])
    },
    numeric: {
        name: 'Numeric',
        key: 'numeric',
        type: 'boolean',
        options: [{ value: true, label: 'True' }, { value: false, label: 'False' }],
    },
}