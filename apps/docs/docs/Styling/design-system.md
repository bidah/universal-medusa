---
sidebar_position: 4
---

# Design System

The base design system primitives are available at `packages/app/design`.

You have 5 categories available. Each with one or more components within which you will use to build your UI.

- image.tsx
- layout.tsx
- pressable.tsx
- svg.tsx
- typography.tsx
- view.tsx


### Extend

You can build on top of current primitives. All components are written using the Nativewind `styled()` higher-order component.

Pickup one of the categories to extend or create a new one. You can start building new UI primitives like so:

```tsx
// packages/app/design/typography
import { Text } from 'react-native'
import { styled } from 'nativewind'

export const DarkText = styled(Text, 'text-base text-black my-4')
```

*Notice that you can set base styles using the second argument of `styled`.*

You can then use the `className` prop, just like regular Tailwind CSS:

```tsx
<DarkText className="px-10"></Darktext>
```


:::info
If you're reading the NativeWind docs, you might find that you can use `className` directly without using `styled`. Since this requires the Babel plugin for all platforms, it won't work with Universal Muedusa and the Solito structure its build on top. Be sure to always wrap your components with `styled`.
:::
