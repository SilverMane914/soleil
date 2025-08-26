module.exports = {
  // Backend files
  "backend/**/*.{js,jsx,ts,tsx}": [
    "cd backend && yarn eslint --fix",
    "prettier --write",
  ],
  "backend/**/*.{json,md,yml,yaml}": ["prettier --write"],

  // Frontend files
  "frontend/**/*.{js,jsx,ts,tsx}": [
    "cd frontend && yarn eslint --fix",
    "prettier --write",
  ],
  "frontend/**/*.{json,md,yml,yaml,css,scss}": ["prettier --write"],

  // Root files - use frontend ESLint for root TypeScript files
  "*.{js,jsx,ts,tsx}": ["cd frontend && yarn eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
};
