/* eslint-disable no-param-reassign */
import { Column, Sort } from '../interfaces';
import {
  DEFAULT_SORT_TYPE,
  SORT_TYPES,
} from './constants';

function getColumnFirstSortType(column: Column) {
  return column.firstSortType || DEFAULT_SORT_TYPE;
}

function getCurrentPrimarySort(sortArray: Sort[], column: Column) {
  return (sortArray.length === 1 && sortArray[0].field === column.field)
    ? sortArray[0].type
    : undefined;
}

function getNextSort(currentSort: string, column: Column) {
  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
      && currentSort === SORT_TYPES.Ascending) {
    return SORT_TYPES.None;
  } if (currentSort === SORT_TYPES.Ascending) {
    return SORT_TYPES.Descending;
  }
  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
      && currentSort === SORT_TYPES.Descending) {
    return SORT_TYPES.Ascending;
  } if (currentSort === SORT_TYPES.Descending) {
    return SORT_TYPES.None;
  }

  if (SORT_TYPES.Descending === getColumnFirstSortType(column)
      && currentSort === SORT_TYPES.None) {
    return SORT_TYPES.Descending;
  }
  return SORT_TYPES.Ascending;
}

function getIndex(sortArray: Sort[], column: Column) {
  for (let i = 0; i < sortArray.length; i += 1) {
    if (column.field === sortArray[i].field) return i;
  }
  return -1;
}

const primarySort = (sortArray: Sort[], column: Column) => {
  const currentPrimarySort = getCurrentPrimarySort(sortArray, column);
  const nextPrimarySort = getNextSort(currentPrimarySort || SORT_TYPES.Ascending, column);
  return [{
    field: column.field,
    type: currentPrimarySort ? nextPrimarySort : getColumnFirstSortType(column),
  }];
};

const secondarySort = (sortArray: Sort[], column: Column) => {
  const index = getIndex(sortArray, column);
  if (index === -1) {
    sortArray.push({
      field: column.field,
      type: getColumnFirstSortType(column),
    });
  } else {
    sortArray[index].type = getNextSort(sortArray[index].type, column);
  }
  return sortArray;
};

export {
  primarySort,
  secondarySort,
};
