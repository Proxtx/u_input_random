export const evaluate = (value) => {
  return Math.floor(Math.random() * (value.max - value.min + 1)) + value.min;
};
