import number from './number';

const percentage = { ...number };

percentage.format = (v) => {
  if (v === undefined || v === null) return '';
  const z = v * 100;
  return `${z.toFixed(2)}%`;
};

export default percentage;
