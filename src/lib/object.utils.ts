export function map_values(o: object, fn: ([k, v]) => any) {
    return Object.fromEntries(Array.from(Object.entries(o)).map(([k, v]) => {
        return [k, fn([k, v])]
    }));
}