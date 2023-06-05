---
sidebar_position: 4
---

# Breakpoints

Breakpoints are configured to be used when styling with NativeWind and when creating layouts with Stacks. The name of each breakpoint can be used interchangeably with both libraries.

```js title="packages/app/design/tailwind/theme.js"
const breakPointsInPx = {
'2xsmall': '320px',
xsmall: '512px',
small: '1024px',
medium: '1280px',
large: '1440px',
xlarge: '1680px',
'2xlarge': '1920px',
}
```

For example you could setup a layout picking up the `medium` breakpoint with the `Columns` component of Stacks library.

```tsx
<Columns space={1} collapseBelow="medium">
    <Column>
    …
    </Column>
    <Column>
    …
    </Column>
</Columns>
```

Or when styling within the className prop in Nativewind.

Here a snippet from the codebase using `small` and `medium`.
```tsx
<View className="small:justify-end small:items-start medium:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
    <Text >
        SUMMER styles are finally here
    </Text>
    <Text className="small:text-left mb-6 max-w-[32rem] text-white shadow-black drop-shadow-md">
        This year, our new summer collection will shelter you from the harsh
        elements of a world that doesn&apos;t care if you live or die.
    </Text>
</View>
```

# Usage
Please refer to the breakpoints documentation on:
- [Stacks library website](https://mobily.github.io/stacks/docs/getting-started/breakpoints)
- [Tailwind.js website](https://tailwindcss.com/docs/responsive-design)
