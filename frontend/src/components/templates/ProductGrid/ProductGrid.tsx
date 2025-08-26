import { forwardRef } from "react";

import { Box, Typography } from "@mui/material";

import { ProductCard } from "../../organisms/ProductCard";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface ProductGridProps {
  products: Product[];
  title?: string;
  loading?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  onProductClick?: (id: string) => void;
  className?: string;
}

export const ProductGrid = forwardRef<HTMLDivElement, ProductGridProps>(
  (
    {
      products,
      title,
      loading = false,
      onFavoriteToggle,
      onAddToCart,
      onProductClick,
      className = "",
    },
    ref
  ) => {
    if (loading) {
      return (
        <Box ref={ref} className={className}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  height: "400px",
                  backgroundColor: "grey.100",
                  borderRadius: 2,
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            ))}
          </Box>
        </Box>
      );
    }

    if (products.length === 0) {
      return (
        <Box
          ref={ref}
          className={className}
          sx={{ textAlign: "center", py: 4 }}
        >
          <Typography variant="h6" color="text.secondary">
            No products found
          </Typography>
        </Box>
      );
    }

    return (
      <Box ref={ref} className={className}>
        {title && (
          <Typography
            variant="h4"
            sx={{ marginBottom: 3, textAlign: "center" }}
          >
            {title}
          </Typography>
        )}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onFavoriteToggle={onFavoriteToggle}
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </Box>
      </Box>
    );
  }
);

ProductGrid.displayName = "ProductGrid";
