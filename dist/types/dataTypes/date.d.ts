import { Column } from '../interfaces';
declare const date: {
    isRight: boolean;
    compare: (x: any, y: any, column?: Column | undefined) => number;
    format: (v: any, column: Column) => string | null;
    filterPredicate(rowval: any, filter: string, skipDiacritics?: boolean, fromDropdown?: boolean): boolean;
};
export default date;
