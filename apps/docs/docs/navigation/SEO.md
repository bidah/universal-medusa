---
sidebar_position: 4
---

# SEO 

## Default Setup
We pass a `seo` object from `getStaticProps` to `pages/products/[handle].tsx` to enable SEO discoverability on all products.


```jsx
// pages/products/[handle].tsx

import {fetchProduct} from "app/lib/hooks/use-product";

export default ProductScreen

export const getStaticProps = async ({ params }) => {
    const product = await fetchProduct(params.slug)
    return {
        props: {
            // this will get passed to pageProps
            seo: { title: product.title, description: product.description },
        },
        revalidate: 1,
    }
}
```

## Extend Usage

To extend setup please refer to the documentation on the [Next-seo repo](https://github.com/garmeeh/next-seo#readme)
