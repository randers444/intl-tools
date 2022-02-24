import type { SelectOptions } from '../config/options.config';

type DateOptionKey = keyof Intl.DateTimeFormatOptions
type DateOptions = Intl.DateTimeFormatOptions
type DateSelectOptions = SelectOptions<DateOptions>

function ditto<K extends DateOptionKey = DateOptionKey>(options: Intl.DateTimeFormatOptions[K][]): { value: Intl.DateTimeFormatOptions[K], label: string }[] {
    return options.map(value => ({ value, label: value.toString() }))
}


const long_short_narrow: ['long', 'short', 'narrow'] = ['long', 'short', 'narrow'];
const full_long_medium_short: ['full', 'long', 'medium', 'short'] = ['full', 'long', 'medium', 'short'];
const numeric_2digit: ['numeric', '2-digit'] = ['numeric', '2-digit'];

export const DATETIME_FORMAT_OPTIONS: DateSelectOptions = {
    localeMatcher: {
        name: 'Locale Matcher',
        key: 'localeMatcher',
        options: ditto<'localeMatcher'>(['best fit', 'lookup'])
    },
    weekday: {
        name: 'Weekday',
        key: 'weekday',
        options: ditto<'weekday'>(long_short_narrow)
    },
    era: {
        name: 'Era',
        key: 'era',
        options: ditto<'era'>(long_short_narrow)
    },
    year: {
        name: 'Year',
        key: 'year',
        options: ditto<'year'>(numeric_2digit)
    },
    month: {
        name: 'Month',
        key: 'month',
        options: ditto<'month'>([...numeric_2digit, ...long_short_narrow])
    },
    day: {
        name: 'Day',
        key: 'day',
        options: ditto<'day'>(numeric_2digit)
    },
    hour: {
        name: 'Hour',
        key: 'hour',
        options: ditto<'hour'>(numeric_2digit)
    },
    minute: {
        name: 'Minute',
        key: 'minute',
        options: ditto<'minute'>(numeric_2digit)
    },
    second: {
        name: 'Second',
        key: 'second',
        options: ditto<'second'>(numeric_2digit)
    },
    timeZoneName: {
        name: 'Time Zone Name',
        key: 'timeZoneName',
        options: ditto<'timeZoneName'>(['long', 'short'])
    },
    formatMatcher: {
        name: 'Format Matcher',
        key: 'formatMatcher',
        options: ditto<'formatMatcher'>(['best fit', 'basic'])
    },
    hour12: {
        name: '12-Hour?',
        key: 'hour12',
        type: 'boolean',
        options: [{ value: true, label: 'True' }, { value: false, label: 'False' }],
    },
    timeZone: {
        name: 'Time Zone',
        key: 'timeZone',
        options: []
    },
    calendar: {
        name: 'Calendar',
        key: 'calendar',
        options: []
    },
    dayPeriod: {
        name: 'Day Period',
        key: 'dayPeriod',
        options: ditto<'dayPeriod'>(long_short_narrow)
    },
    numberingSystem: {
        name: 'Numbering System',
        key: 'numberingSystem',
        options: []
    },
    dateStyle: {
        name: 'Date Style',
        key: 'dateStyle',
        options: ditto<'dateStyle'>(full_long_medium_short)
    },
    timeStyle: {
        name: 'Time Style',
        key: 'timeStyle',
        options: ditto<'timeStyle'>(full_long_medium_short)
    },
    hourCycle: {
        name: 'Hour Cycle',
        key: 'hourCycle',
        options: ditto<'hourCycle'>(["h11", "h12", "h23", "h24"])
    }
}