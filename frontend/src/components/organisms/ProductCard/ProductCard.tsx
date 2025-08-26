import { forwardRef } from "react";

import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { Box, Chip, Rating } from "@mui/material";

import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Typography } from "../../atoms/Typography";

export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  onProductClick?: (id: string) => void;
  className?: string;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      id,
      title,
      description,
      price,
      originalPrice,
      image,
      rating,
      reviewCount,
      isFavorite = false,
      onFavoriteToggle,
      onAddToCart,
      onProductClick,
      className = "",
    },
    ref
  ) => {
    const handleFavoriteToggle = () => {
      onFavoriteToggle?.(id);
    };

    const handleAddToCart = () => {
      onAddToCart?.(id);
    };

    const handleProductClick = () => {
      onProductClick?.(id);
    };

    const discount = originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

    return (
      <Card
        ref={ref}
        className={className}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{ position: "relative", cursor: "pointer" }}
          onClick={handleProductClick}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          {discount > 0 && (
            <Chip
              label={`-${discount}%`}
              color="error"
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                fontWeight: "bold",
              }}
            />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={e => {
              e.stopPropagation();
              handleFavoriteToggle();
            }}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              minWidth: "auto",
              padding: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: 1,
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
            }}
            onClick={handleProductClick}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 1, flexGrow: 1 }}
          >
            {description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Rating value={rating} precision={0.5} size="small" readOnly />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 1 }}
            >
              ({reviewCount})
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" color="primary.main" fontWeight="bold">
                ${price.toFixed(2)}
              </Typography>
              {originalPrice && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ${originalPrice.toFixed(2)}
                </Typography>
              )}
            </Box>
          </Box>

          <Button
            variant="primary"
            size="md"
            onClick={handleAddToCart}
            startIcon={<ShoppingCart />}
            fullWidth
          >
            Add to Cart
          </Button>
        </Box>
      </Card>
    );
  }
);

ProductCard.displayName = "ProductCard";
