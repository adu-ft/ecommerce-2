/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoeColor, CartItem } from './types';
import { PRODUCT_PRICE } from './constants/pricing';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WalkingLifestyleBanner } from './components/WalkingLifestyleBanner';
import { UnboxingSection } from './components/UnboxingSection';
import { MaterialsSection } from './components/MaterialsSection';
import { AnglesGridSection } from './components/AnglesGridSection';
import { LifestyleSection } from './components/LifestyleSection';
import { ProductConfigurator } from './components/ProductConfigurator';
import { ReviewsSection } from './components/ReviewsSection';
import { MotionBanner } from './components/MotionBanner';
import { FaqSection } from './components/FaqSection';
import { PreFooterSection } from './components/PreFooterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ContactModal } from './components/ContactModal';
import { COLOR_CONFIG } from './components/SneakerVisual';
import { ScrollProgressBar } from './components/animations/ScrollReveal';

export default function App() {
  const [selectedColor, setSelectedColor] = useState<ShoeColor>('sand');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Guarantee that no default or stale product persists in the bag
  useEffect(() => {
    setCartItems([]);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (color: ShoeColor, size: string) => {
    const colorData = COLOR_CONFIG[color];
    const itemId = `adrix-aero01-${color}-${size}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productName: 'Adrix Aero 01',
          color,
          colorName: colorData.name,
          size,
          price: PRODUCT_PRICE,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToBuy = () => {
    const buySection = document.getElementById('buy-section');
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#E7E6DE] text-[#191817] flex flex-col selection:bg-[#191817] selection:text-white">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onBuyClick={scrollToBuy}
      />

      {/* Main Page Flow Matching Reference Image */}
      <main className="flex-1">
        {/* 1. Hero Section: Made for every day. */}
        <div id="overview-section" className="w-full bg-[#E7E6DE]">
          <HeroSection
            color={selectedColor}
            onColorChange={setSelectedColor}
            onBuyClick={scrollToBuy}
          />
        </div>

        {/* 2. Full-bleed Lifestyle Banner: Soft enough for all-day wear. */}
        <div id="comfort-section">
          <WalkingLifestyleBanner
            color={selectedColor}
            onExploreClick={scrollToBuy}
          />
        </div>

        {/* 3. Unboxing & Features: Comfort without the bulk. */}
        <UnboxingSection color={selectedColor} />

        {/* 4. Materials Breakdown: Every material earns its place. */}
        <div id="materials-section">
          <MaterialsSection color={selectedColor} />
        </div>

        {/* 5. 360 Angles 2x2 Grid (Dark Section): Looks simple. Feels considered. */}
        <div id="angles-section">
          <AnglesGridSection color={selectedColor} />
        </div>

        {/* 6. Everyday Lifestyle Moments: From first coffee to last train. */}
        <div id="moments-section">
          <LifestyleSection color={selectedColor} />
        </div>

        {/* 7. Product Configurator: Your everyday pair. */}
        <ProductConfigurator
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        {/* 8. Customer Reviews (Dark Section): The pair people keep reaching for. */}
        <div id="reviews-section">
          <ReviewsSection />
        </div>

        {/* 9. Runner in Motion Banner */}
        <MotionBanner color={selectedColor} />

        {/* 10. Frequently Asked Questions */}
        <FaqSection onContactClick={() => setIsContactOpen(true)} />

        {/* 11. Pre-Footer Banner: Your everyday gear is here. */}
        <PreFooterSection
          color={selectedColor}
          onBuyClick={scrollToBuy}
        />
      </main>

      {/* 12. Dark Footer */}
      <Footer />

      {/* Interactive Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
