"use client";

import { forwardRef } from "react";

import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { SearchBar } from "@/components";

export interface HeaderProps {
  favoritesCount?: number;
  cartItemsCount?: number;
  onSearch?: (query: string) => void;
  onFavoriteClick?: () => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onLogoClick?: () => void;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      favoritesCount = 0,
      cartItemsCount = 0,
      onSearch,
      onFavoriteClick,
      onCartClick,
      onProfileClick,
      onLogoClick,
    },
    ref
  ) => {
    return (
      <AppBar
        ref={ref}
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <Box
              onClick={onLogoClick}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary.main"
                sx={{ userSelect: "none" }}
              >
                Soleil
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flex: 1,
                maxWidth: 600,
                mx: 4,
              }}
            >
              <SearchBar
                placeholder="Search products..."
                onSearch={onSearch}
                size="md"
              />
            </Box>

            {/* Navigation */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                color="inherit"
                onClick={onFavoriteClick}
                aria-label="Favorites"
              >
                <Badge badgeContent={favoritesCount} color="error">
                  <Favorite color={favoritesCount > 0 ? "error" : "action"} />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={onCartClick}
                aria-label="Shopping cart"
              >
                <Badge badgeContent={cartItemsCount} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={onProfileClick}
                aria-label="User profile"
              >
                <Person />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);

Header.displayName = "Header";
