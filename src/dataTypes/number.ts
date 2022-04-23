import def from './default';

const number = { ...def, isRight: true };

number.filterPredicate = (rowval, filter) => number.compare(rowval, filter) === 0;

number.compare = (x, y) => {
  function cook(d: any) {
    // if d is null or undefined we give it the smallest
    // possible value
    if (d === undefined || d === null) return -Infinity;
    return d.indexOf('.') >= 0 ? parseFloat(d) : parseInt(d, 10);
  }

  const a = typeof x === 'number' ? x : cook(x);
  const b = typeof y === 'number' ? y : cook(y);
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export default number;
