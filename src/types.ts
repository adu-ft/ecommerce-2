export type ShoeColor = 'sand' | 'navy' | 'pink';

export interface ShoeVariant {
  id: ShoeColor;
  name: string;
  hex: string;
  bgHex: string;
  accentHex: string;
  soleHex: string;
  label: string;
}

export interface CartItem {
  id: string;
  productName: string;
  color: ShoeColor;
  colorName: string;
  size: string;
  price: number;
  quantity: number;
}

export interface ReviewItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  location: string;
  avatarSeed: string;
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
