export declare type SelectorGeneratorOptions = {
    root: Element;
    idName: (name: string) => boolean;
    className: (name: string) => boolean;
    tagName: (name: string) => boolean;
    attr: (name: string, value: string) => boolean;
    optimizedMinLength: number;
    threshold: number;
    maxNumberOfTries: number;
};
export declare function selectorGenerator(input: Element, options?: Partial<SelectorGeneratorOptions>): string;
