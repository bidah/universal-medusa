---
sidebar_position: 4
---

# useUniversalPathname

When using both solito and expo-router the solito library is missing a way to get the current pathname.
This hook solves this gap. Use it to get the current pathname on both platforms.

## Usage

```tsx title="app/lib/hooks/use-universal-pathname"
  const pathname = useUniversalPathname()
```

