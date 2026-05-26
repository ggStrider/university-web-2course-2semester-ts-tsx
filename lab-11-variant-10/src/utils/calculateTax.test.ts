import { describe, it, expect } from 'vitest';
import { calculateTax } from './calculateTax';

describe('calculateTax function', () => {
  it('correctly calculates 20% tax on 200', () => {
    // Arrange
    const amount = 200;
    const taxRate = 20;

    // Act
    const result = calculateTax(amount, taxRate);

    // Assert
    expect(result).toBe(40);
  });

  it('returns 0 for 0% tax rate', () => {
    // Arrange
    const amount = 500;
    const taxRate = 0;

    // Act
    const result = calculateTax(amount, taxRate);

    // Assert
    expect(result).toBe(0);
  });

  it('throws an error for negative amount', () => {
    expect(() => calculateTax(-100, 10)).toThrow('Invalid arguments');
  });

  it('throws an error for negative tax rate', () => {
    expect(() => calculateTax(100, -5)).toThrow('Invalid arguments');
  });
});
