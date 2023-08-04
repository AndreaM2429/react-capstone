const totalPrecio = 1243343;

export const numberFormat = (number) => {
  const newFormat = new Intl.NumberFormat('en-US').format(number);
  return newFormat;
};

const totalPrecioUsd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(totalPrecio);

export default totalPrecioUsd;
