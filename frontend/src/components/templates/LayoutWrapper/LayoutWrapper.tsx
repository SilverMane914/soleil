"use client";

import { Footer, Header } from "@/components";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const handleHeaderSearch = (query: string) => {
    console.log("Header search:", query);
    // Handle search functionality
  };

  const handleHeaderFavoriteClick = () => {
    console.log("Header favorites clicked");
    // Navigate to favorites page
  };

  const handleHeaderCartClick = () => {
    console.log("Header cart clicked");
    // Navigate to cart page
  };

  const handleHeaderProfileClick = () => {
    console.log("Header profile clicked");
    // Navigate to profile page
  };

  const handleHeaderLogoClick = () => {
    console.log("Header logo clicked");
    // Navigate to home page
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    // Navigate to the link
  };

  const handleFooterSocialClick = (platform: string) => {
    console.log("Footer social clicked:", platform);
    // Open social media link
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        onSearch={handleHeaderSearch}
        onFavoriteClick={handleHeaderFavoriteClick}
        onCartClick={handleHeaderCartClick}
        onProfileClick={handleHeaderProfileClick}
        onLogoClick={handleHeaderLogoClick}
      />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer
        onLinkClick={handleFooterLinkClick}
        onSocialClick={handleFooterSocialClick}
      />
    </div>
  );
};
