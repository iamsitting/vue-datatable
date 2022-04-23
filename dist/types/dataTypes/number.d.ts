declare const number: {
    isRight: boolean;
    format(x: any): any;
    filterPredicate(rowval: any, filter: string, skipDiacritics?: boolean, fromDropdown?: boolean): boolean;
    compare(x: any, y: any): 1 | -1 | 0;
};
export default number;
