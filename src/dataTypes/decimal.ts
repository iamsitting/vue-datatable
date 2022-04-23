import number from './number';

const decimal = { ...number };

decimal.format = (v) => {
  if (v === undefined || v === null) return '';
  const z = Math.round(v * 100) / 100;
  return z.toFixed(2);
};

export default decimal;
