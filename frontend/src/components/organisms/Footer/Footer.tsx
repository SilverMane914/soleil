import { forwardRef } from "react";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

export interface FooterProps {
  onLinkClick?: (link: string) => void;
  onSocialClick?: (platform: string) => void;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ onLinkClick, onSocialClick }, ref) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
      company: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
      ],
      support: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Returns", href: "/returns" },
        { label: "Shipping", href: "/shipping" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
      ],
    };

    const socialPlatforms = [
      { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
      { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
      { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
      { name: "LinkedIn", icon: LinkedIn, href: "https://linkedin.com" },
    ];

    return (
      <Box
        ref={ref}
        component="footer"
        sx={{
          backgroundColor: "background.paper",
          borderTop: "1px solid",
          borderColor: "divider",
          mt: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(5, 1fr)",
              },
              gap: 4,
            }}
          >
            {/* Company Info */}
            <Box sx={{ gridColumn: { xs: "1", md: "1 / 2" } }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary.main"
                sx={{ mb: 2 }}
              >
                Soleil
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Discover amazing products with our modern e-commerce platform
                built with cutting-edge technology.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialPlatforms.map(platform => {
                  const Icon = platform.icon;
                  return (
                    <IconButton
                      key={platform.name}
                      size="small"
                      onClick={() =>
                        onSocialClick?.(platform.name.toLowerCase())
                      }
                      sx={{ color: "text.secondary" }}
                      aria-label={platform.name}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>

            {/* Company Links */}
            <Box sx={{ gridColumn: { xs: "1", sm: "2", md: "2 / 3" } }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Company
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.company.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      onLinkClick?.(link.href);
                    }}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Support Links */}
            <Box sx={{ gridColumn: { xs: "1", sm: "1", md: "3 / 4" } }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.support.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      onLinkClick?.(link.href);
                    }}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Legal Links */}
            <Box sx={{ gridColumn: { xs: "1", sm: "2", md: "4 / 5" } }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Legal
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {footerLinks.legal.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      onLinkClick?.(link.href);
                    }}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Newsletter */}
            <Box sx={{ gridColumn: { xs: "1", sm: "1", md: "5 / 6" } }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Subscribe to get special offers and updates.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Coming soon...
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Bottom Footer */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Soleil. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Made with ❤️ using Next.js & Material-UI
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
);

Footer.displayName = "Footer";
