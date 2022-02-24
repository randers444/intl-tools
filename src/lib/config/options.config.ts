export interface SelectOption<V = Record<string, any>, K extends keyof V = keyof V> {
    name: string;
    type?: string;
    key: K;
    options: SelectOptionEntry<V[K]>[];
}

export type SelectOptions<V = any> = {
    [K in keyof V]: SelectOption<V, K>
}

export interface SelectOptionEntry<T = any> {
    value: T;
    label: string;
}