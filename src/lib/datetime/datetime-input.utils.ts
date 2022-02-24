export function format_date(date: Date) {
    let month, day, year;

    (month = '' + (date.getMonth() + 1)), (day = '' + date.getDate()), (year = date.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function parse_date(date: string, current: Date) {
    const next = new Date(current);
    const [year, month, day] = date.split('-');
    next.setFullYear(+year);
    next.setMonth(+month - 1);
    next.setDate(+day);

    return next;
}

export function format_time(date: Date) {
    console.log(date);
    return new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', hourCycle: 'h23' }).format(date);
}

export function parse_time(date: string, current: Date) {
    const next = new Date(current);
    const [hour, minute, second] = date.split(':');
    next.setHours(+hour);
    next.setMinutes(+minute);
    next.setSeconds(+second);

    return next;
}