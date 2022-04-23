import def from './default';

const boolean = { ...def, isRight: true };

boolean.filterPredicate = (rowval, filter) => boolean.compare(rowval, filter) === 0;

boolean.compare = (x, y) => {
  function cook(d: any) {
    if (typeof d === 'boolean') return d ? 1 : 0;
    if (typeof d === 'string') return d === 'true' ? 1 : 0;
    return -Infinity;
  }

  const a = cook(x);
  const b = cook(y);
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export default boolean;
