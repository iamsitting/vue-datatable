import { Column, Sort } from '../interfaces';
declare const primarySort: (sortArray: Sort[], column: Column) => {
    field: string;
    type: string;
}[];
declare const secondarySort: (sortArray: Sort[], column: Column) => Sort[];
export { primarySort, secondarySort, };
