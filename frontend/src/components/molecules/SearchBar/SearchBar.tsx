"use client";

import { forwardRef, useState } from "react";

import { Clear as ClearIcon, Search as SearchIcon } from "@mui/icons-material";
import { Box, IconButton, InputAdornment } from "@mui/material";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  (
    {
      placeholder = "Search...",
      onSearch,
      onClear,
      className = "",
      size = "md",
    },
    ref
  ) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
      onSearch?.(query);
    };

    const handleClear = () => {
      setQuery("");
      onClear?.();
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    return (
      <Box
        ref={ref}
        className={className}
        sx={{ display: "flex", gap: 1, alignItems: "center" }}
      >
        <Input
          size={size}
          placeholder={placeholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="primary"
          size={size}
          onClick={handleSearch}
          disabled={!query.trim()}
        >
          Search
        </Button>
      </Box>
    );
  }
);

SearchBar.displayName = "SearchBar";
