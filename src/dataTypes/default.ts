import { diacriticless } from '../utils/diacritics';

const escapeRegExp = (str: string) => str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');

export default {
  format(x: any) {
    return x;
  },
  filterPredicate(rowval: any, filter:string, skipDiacritics = false, fromDropdown = false) {
    // take care of nulls
    if (typeof rowval === 'undefined' || rowval === null) {
      return false;
    }

    // row value
    const rowValue = skipDiacritics
      ? String(rowval).toLowerCase()
      : diacriticless(escapeRegExp(String(rowval)).toLowerCase());

    // search term
    const searchTerm = skipDiacritics
      ? filter.toLowerCase()
      : diacriticless(escapeRegExp(filter).toLowerCase());

    // comparison
    return fromDropdown ? rowValue === searchTerm : (rowValue.indexOf(searchTerm) > -1);
  },

  compare(x: any, y: any) {
    function cook(d: any) {
      if (typeof d === 'undefined' || d === null) return '';
      return diacriticless(String(d).toLowerCase());
    }
    const a = cook(x);
    const b = cook(y);
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  },
};
