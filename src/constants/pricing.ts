export const PRODUCT_PRICE = 11999;
export const PRODUCT_PRICE_FORMATTED = '₹11,999';
export const SHIPPING_THRESHOLD = 1999;

export const formatINR = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN')}`;
};
