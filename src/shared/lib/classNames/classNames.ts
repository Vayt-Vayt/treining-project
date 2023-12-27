
type Mods = Record<string, boolean | string>

export interface ClassNamesProps {
    cls: string;
    additional: string[];
    mods: Mods;
}

export function classNames<ClassNamesProps>(cls = '', additional = [''], mods = {} ): string {

    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
    ].join(' ') 
}