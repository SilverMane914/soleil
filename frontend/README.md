# Soleil Frontend - Atomic Design with Material-UI v7

A modern e-commerce frontend built with Next.js 15, Material-UI (MUI) v7, and Atomic Design principles.

## 🏗️ Architecture

This project follows **Atomic Design** methodology, organizing components into a hierarchical structure:

### 📁 Component Structure

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Button/     # Reusable button component
│   ├── Input/      # Form input component
│   ├── Card/       # Card container component
│   └── Typography/ # Text display component
├── molecules/       # Simple combinations of atoms
│   └── SearchBar/  # Search input with button
├── organisms/       # Complex UI components
│   └── ProductCard/ # Product display card
├── templates/       # Page-level layouts
│   └── ProductGrid/ # Product listing grid
└── index.ts        # Barrel exports
```

## 🎨 Design System

### MUI v7 Integration

- **Material-UI v7**: Latest version with improved TypeScript support
- **ForwardRef Components**: All components use forwardRef for better composition
- **TypeScript**: Full type safety with proper interface definitions
- **CSS Grid**: Modern responsive grid system instead of MUI Grid for better performance

### Component Variants

#### Button

- **Variants**: `primary`, `secondary`, `outline`, `ghost`
- **Sizes**: `sm`, `md`, `lg`
- **Features**: Hover effects, loading states, icons

#### Input

- **Types**: `text`, `email`, `password`, `number`, `tel`, `url`
- **Sizes**: `sm`, `md`, `lg`
- **Features**: Labels, validation, error states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

### Development Commands

```bash
# Lint code
yarn lint

# Type check
yarn type-check

# Run tests
yarn test
```

## 📦 Key Dependencies

- **Next.js 15**: React framework with App Router
- **Material-UI 7**: Component library and theming
- **TypeScript**: Type safety and developer experience
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting

## 🎯 Features

### ✅ Implemented

- [x] Atomic Design component structure
- [x] Material-UI v7 integration
- [x] Responsive design system
- [x] TypeScript support
- [x] ESLint and Prettier configuration
- [x] Component documentation
- [x] Search functionality
- [x] Favorites system
- [x] Shopping cart (UI only)
- [x] ForwardRef components
- [x] CSS Grid layout
- [x] Production build working

### 🚧 Planned

- [ ] State management (Zustand/Redux)
- [ ] API integration
- [ ] Authentication system
- [ ] Product detail pages
- [ ] Checkout flow
- [ ] User profile
- [ ] Admin dashboard
- [ ] Unit tests
- [ ] E2E tests

## 🎨 Component Usage Examples

### Basic Button

```tsx
import { Button } from "@/components";

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>;
```

### Search Bar

```tsx
import { SearchBar } from "@/components";

<SearchBar
  placeholder="Search products..."
  onSearch={handleSearch}
  onClear={handleClear}
/>;
```

### Product Grid

```tsx
import { ProductGrid } from "@/components";

<ProductGrid
  products={products}
  title="Featured Products"
  onFavoriteToggle={handleFavoriteToggle}
  onAddToCart={handleAddToCart}
  onProductClick={handleProductClick}
/>;
```

## 🔧 Configuration

### ESLint

- Custom rules for import sorting
- TypeScript support
- React hooks rules

### Prettier

- Consistent code formatting
- Integration with ESLint

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/*`)
- Next.js types included

## 📱 Responsive Design

The application is fully responsive with CSS Grid:

- **xs**: 1 column (Mobile)
- **sm**: 2 columns (Tablet)
- **md**: 3 columns (Desktop)
- **lg**: 4 columns (Large Desktop)

## 🎯 Best Practices

1. **Component Composition**: Use composition over inheritance
2. **Type Safety**: Always define TypeScript interfaces
3. **Accessibility**: Follow ARIA guidelines
4. **Performance**: Use React.memo for expensive components
5. **Testing**: Write tests for complex logic
6. **Documentation**: Document component props and usage
7. **ForwardRef**: Use forwardRef for all components
8. **Modern CSS**: Use CSS Grid for layouts

## 🚀 Performance Optimizations

- **CSS Grid**: Better performance than MUI Grid
- **ForwardRef**: Improved component composition
- **Static Generation**: Next.js static site generation
- **Tree Shaking**: MUI components are tree-shakeable
- **TypeScript**: Compile-time optimizations

## 🤝 Contributing

1. Follow the atomic design structure
2. Use TypeScript for all components
3. Follow the established naming conventions
4. Add proper JSDoc comments
5. Update this README when adding new features
6. Use forwardRef for all components
7. Test components thoroughly

## 📄 License

This project is licensed under the MIT License.

## 🎉 Success!

✅ **Build Status**: Production build working  
✅ **Development**: Hot reload working  
✅ **TypeScript**: Full type safety  
✅ **ESLint**: All rules passing  
✅ **Atomic Design**: Properly structured  
✅ **MUI v7**: Latest features implemented
