export const calculateTax = (amount: number, taxRate: number): number => {
  if (amount < 0 || taxRate < 0) {
    throw new Error('Invalid arguments');
  }
  return amount * (taxRate / 100);
};
