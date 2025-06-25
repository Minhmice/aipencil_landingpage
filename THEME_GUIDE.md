# Theme System Guide

## Overview

Dự án này đã được cập nhật để sử dụng hệ thống CSS variables cho theme, hỗ trợ cả light mode và dark mode.

## CSS Variables

### Light Mode (Default)
```css
:root {
  --background: #ffffff;
  --foreground: #262626;
  --card: #ffffff;
  --card-foreground: #262626;
  --popover: #ffffff;
  --popover-foreground: #262626;
  --primary: #f59e0b;
  --primary-foreground: #000000;
  --secondary: #f3f4f6;
  --secondary-foreground: #4b5563;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --accent: #fffbeb;
  --accent-foreground: #92400e;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #f59e0b;
  --chart-1: #f59e0b;
  --chart-2: #d97706;
  --chart-3: #b45309;
  --chart-4: #92400e;
  --chart-5: #78350f;
  --sidebar: #f9fafb;
  --sidebar-foreground: #262626;
  --sidebar-primary: #f59e0b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #fffbeb;
  --sidebar-accent-foreground: #92400e;
  --sidebar-border: #e5e7eb;
  --sidebar-ring: #f59e0b;
}
```

### Dark Mode
```css
.dark {
  --background: #171717;
  --foreground: #e5e5e5;
  --card: #262626;
  --card-foreground: #e5e5e5;
  --popover: #262626;
  --popover-foreground: #e5e5e5;
  --primary: #f59e0b;
  --primary-foreground: #000000;
  --secondary: #262626;
  --secondary-foreground: #e5e5e5;
  --muted: #262626;
  --muted-foreground: #a3a3a3;
  --accent: #92400e;
  --accent-foreground: #fde68a;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #404040;
  --input: #404040;
  --ring: #f59e0b;
  --chart-1: #fbbf24;
  --chart-2: #d97706;
  --chart-3: #92400e;
  --chart-4: #b45309;
  --chart-5: #92400e;
  --sidebar: #0f0f0f;
  --sidebar-foreground: #e5e5e5;
  --sidebar-primary: #f59e0b;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #92400e;
  --sidebar-accent-foreground: #fde68a;
  --sidebar-border: #404040;
  --sidebar-ring: #f59e0b;
}
```

## Usage

### In Tailwind CSS
Sử dụng các class Tailwind đã được cấu hình:

```jsx
// Background colors
<div className="bg-background">Background</div>
<div className="bg-card">Card background</div>
<div className="bg-muted">Muted background</div>

// Text colors
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Muted text</p>
<p className="text-primary">Primary text</p>

// Border colors
<div className="border border-border">Border</div>

// Hover states
<button className="hover:bg-muted hover:text-primary">
  Hover button
</button>
```

### In CSS
Sử dụng CSS variables trực tiếp:

```css
.my-component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

.my-component:hover {
  background-color: var(--muted);
  color: var(--primary);
}
```

## Theme Toggle

Dự án đã bao gồm một component `ThemeToggle` để chuyển đổi giữa light và dark mode:

```jsx
import ThemeToggle from "@/components/ThemeToggle";

// Sử dụng trong component
<ThemeToggle />
```

## Fonts

Hệ thống font đã được cập nhật:

- **Sans**: Inter (default)
- **Serif**: Source Serif 4
- **Mono**: JetBrains Mono

```jsx
<p className="font-sans">Sans font</p>
<p className="font-serif">Serif font</p>
<p className="font-mono">Monospace font</p>
```

## Shadows

Các shadow đã được cấu hình với CSS variables:

```jsx
<div className="shadow-sm">Small shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">2XL shadow</div>
```

## Border Radius

Border radius đã được cấu hình:

```jsx
<div className="rounded-sm">Small radius</div>
<div className="rounded-md">Medium radius</div>
<div className="rounded-lg">Large radius</div>
<div className="rounded-xl">Extra large radius</div>
```

## Prose Styles

Các styles cho prose content đã được cấu hình để tương thích với theme:

```jsx
<div className="prose">
  <h1>Heading</h1>
  <p>Paragraph text</p>
  <code>Code block</code>
</div>
```

## Migration Notes

1. Tất cả hardcoded colors đã được thay thế bằng CSS variables
2. Tailwind config đã được cập nhật để sử dụng CSS variables
3. Theme toggle đã được thêm vào navigation
4. Font đã được thay đổi từ Montserrat sang Inter
5. Prose styles đã được cấu hình cho dark mode compatibility

## Best Practices

1. Luôn sử dụng CSS variables thay vì hardcoded colors
2. Sử dụng semantic color names (foreground, muted-foreground, etc.)
3. Test cả light và dark mode khi phát triển
4. Sử dụng Tailwind classes khi có thể
5. Sử dụng CSS variables trực tiếp cho custom styles 