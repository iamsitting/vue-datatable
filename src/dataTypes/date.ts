import {
  format, parse, isValid, compareAsc,
} from 'date-fns';
import { Column } from '../interfaces';
import def from './default';

/**
 * Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.
 * @param {*} x Date 1
 * @param {*} y Date 2
 * @param {Object} column Additional parameters (e.g. dateInputFormat, dateOutputFormat)
 * @returns
 */
const compare = (x: any, y: any, column?: Column) => {
  function cook(d: any) {
    if (column && column.dateInputFormat) {
      return parse(`${d}`, `${column.dateInputFormat}`, new Date());
    } if (typeof d === 'string') {
      try {
        return Date.parse(d);
      } catch (err) {
        return d;
      }
    }
    return d;
  }
  const a = cook(x);
  const b = cook(y);
  if (!isValid(a)) {
    return -1;
  }
  if (!isValid(b)) {
    return 1;
  }
  return compareAsc(a, b);
};

const dateFormat = (v: any, column: Column) => {
  if (v === undefined || v === null) return '';
  // convert to date
  const dt = parse(v, column.dateInputFormat, new Date());
  if (isValid(dt)) {
    return format(dt, column.dateOutputFormat);
  }
  console.error(`Not a valid date: "${v}"`);
  return null;
};

const date = {
  ...def, isRight: true, compare, format: dateFormat,
};

export default date;
