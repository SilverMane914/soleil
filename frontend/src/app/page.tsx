"use client";

import { useState } from "react";

import { Box, Container, Typography } from "@mui/material";

import { type Product, ProductGrid } from "@/components";

export default function Home() {
  const [_favorites, setFavorites] = useState<string[]>([]);
  const [_cartItems, setCartItems] = useState<string[]>([]);
  const [products, _setProducts] = useState<Product[]>([]);

  const handleFavoriteToggle = (productId: string) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
  };

  const handleProductClick = (productId: string) => {
    console.log("Product clicked:", productId);
    // Navigate to product detail page
  };

  const filteredProducts = products.filter(_product => true);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
          Welcome to Soleil
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Your modern e-commerce platform
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Featured Products
        </Typography>

        {filteredProducts.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              No products available
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Products will appear here when added
            </Typography>
          </Box>
        ) : (
          <ProductGrid
            products={filteredProducts}
            onFavoriteToggle={handleFavoriteToggle}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        )}
      </Box>

      {/* Additional Sections Placeholder */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Additional Content
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is a placeholder for additional homepage content.
        </Typography>
      </Box>
    </Container>
  );
}
