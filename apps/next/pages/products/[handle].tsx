import { ProductScreen } from 'app/modules/products/screen'
import {fetchProduct} from "app/lib/hooks/use-product";

export default ProductScreen
// export const getStaticProps = async ({ params }) => {
//     const product = await fetchProduct(params.slug)
//     return {
//         props: {
//             // this will get passed to pageProps
//             seo: { title: product.title, description: product.description },
//         },
//         revalidate: 1,
//     }
// }
