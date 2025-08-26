import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["vi"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Admin Panel",
        "Auth.form.welcome.subtitle": "Login to admin panel",
        "Auth.form.button.login.strapi": "Login to admin panel",
        "app.components.LeftMenu.navbrand.title": "Admin Panel",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      },
      vi: {
        "Auth.form.welcome.title": "Chào mừng đến Admin Panel",
        "Auth.form.welcome.subtitle": "Đăng nhập vào admin panel",
        "Auth.form.button.login.strapi": "Đăng nhập vào admin panel",
        "app.components.LeftMenu.navbrand.title": "Admin Panel",
        "app.components.LeftMenu.navbrand.workplace": "Bảng điều khiển",
      },
    },
    theme: {
      light: {
        colors: {
          // Primary colors
          primary100: "#e6f7e6",
          primary200: "#b3e6b3",
          primary500: "#4CAF50",
          primary600: "#45a049",
          primary700: "#3d8b40",
          danger700: "#b72b1a",

          // Loading colors
          primary150: "#d4f0d4",
          primary250: "#a8e0a8",
          primary300: "#8cd98c",
          primary400: "#70d270",
          primary800: "#2e7d32",
          primary900: "#1b5e20",

          // Button colors
          buttonPrimary500: "#4CAF50",
          buttonPrimary600: "#45a049",
          buttonPrimary700: "#3d8b40",
          buttonSecondary500: "#4CAF50",
          buttonSecondary600: "#45a049",
          buttonSecondary700: "#3d8b40",
          buttonSuccess500: "#4CAF50",
          buttonSuccess600: "#45a049",
          buttonSuccess700: "#3d8b40",
          buttonDanger500: "#f44336",
          buttonDanger600: "#d32f2f",
          buttonDanger700: "#c62828",
          buttonWarning500: "#ff9800",
          buttonWarning600: "#f57c00",
          buttonWarning700: "#ef6c00",
          buttonInfo500: "#2196f3",
          buttonInfo600: "#1976d2",
          buttonInfo700: "#1565c0",

          // Alternative button colors
          alternative100: "#e6f7e6",
          alternative200: "#b3e6b3",
          alternative500: "#4CAF50",
          alternative600: "#45a049",
          alternative700: "#3d8b40",
        },
      },
      dark: {
        colors: {
          // Primary colors
          primary100: "#1b5e20",
          primary200: "#2e7d32",
          primary500: "#4CAF50",
          primary600: "#66bb6a",
          primary700: "#81c784",
          danger700: "#b72b1a",

          // Loading colors for dark theme
          primary150: "#0d4f14",
          primary250: "#1b5e20",
          primary300: "#2e7d32",
          primary400: "#388e3c",
          primary800: "#66bb6a",
          primary900: "#81c784",

          // Button colors for dark theme
          buttonPrimary500: "#4CAF50",
          buttonPrimary600: "#66bb6a",
          buttonPrimary700: "#81c784",
          buttonSecondary500: "#4CAF50",
          buttonSecondary600: "#66bb6a",
          buttonSecondary700: "#81c784",
          buttonSuccess500: "#4CAF50",
          buttonSuccess600: "#66bb6a",
          buttonSuccess700: "#81c784",
          buttonDanger500: "#f44336",
          buttonDanger600: "#ef5350",
          buttonDanger700: "#e57373",
          buttonWarning500: "#ff9800",
          buttonWarning600: "#ffb74d",
          buttonWarning700: "#ffcc02",
          buttonInfo500: "#2196f3",
          buttonInfo600: "#42a5f5",
          buttonInfo700: "#64b5f6",

          // Alternative button colors for dark theme
          alternative100: "#1b5e20",
          alternative200: "#2e7d32",
          alternative500: "#4CAF50",
          alternative600: "#66bb6a",
          alternative700: "#81c784",
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
