
export type Mods = Record<string, Boolean | string | undefined>;


export function classNames(
    cls: string,
    additional: Array<string | undefined> = [],
    mods: Mods = {}
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(" ");
}
