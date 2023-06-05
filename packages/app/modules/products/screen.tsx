import { medusaClient } from 'app/lib/config'
import { IS_BROWSER } from 'app/lib/constants'
// import { getProductHandles } from "app/lib/util/get-product-handles"
// import Head from "app/modules/common/components/head"
// import Layout from "app/modules/layout/templates"
import ProductTemplate from 'app/modules/products/templates'
import SkeletonProductPage from 'app/modules/skeletons/templates/skeleton-product-page'
// import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from 'querystring'
// import { ReactElement } from "react"
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { NextPageWithLayout, PrefetchedPageProps } from 'app/types/global'
import { ScrollView, Text, View } from 'app/design'
import { createParam } from 'solito'
import { Stack } from 'expo-router'
import useProduct from '../../lib/hooks/use-product'
interface Params extends ParsedUrlQuery {
  handle: string
}

export const ProductScreen = (props) => {
  const { useParam } = createParam<Params>()
  const [handle] = useParam('handle', { initial: '' })

  const { data, isError, isLoading, isSuccess } = useProduct(handle)

  // if (notFound) {
  //   if (IS_BROWSER) {
  //     replace('/404')
  //   }
  //
  //   return null
  //   // return <SkeletonProductPage />
  // }

  if (isLoading || !data) {
    return (
      <View className={'absolute inset-0'}>
        <ScrollView className="bg-white px-4">
          <SkeletonProductPage />
        </ScrollView>
      </View>
    )
  }

  // if (isError) {
  //   replace('/404')
  // }

  if (isSuccess) {
    return (
      <ScrollView className="bg-white">
        {/*TODO: move header to next page*/}
        {/*<Head*/}
        {/*    description={data.description}*/}
        {/*    title={data.title}*/}
        {/*    image={data.thumbnail}*/}
        {/*/>*/}
        <ProductTemplate product={data} />
      </ScrollView>
    )
  }

  return <></>
}

// ProductPage.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const handles = await getProductHandles()
//   return {
//     paths: handles.map((handle) => ({ params: { handle } })),
//     fallback: true,
//   }
// }
//
// export const getStaticProps: GetStaticProps = async (context) => {
//   const handle = context.params?.handle as string
//
//   const queryClient = new QueryClient()
//
//   await queryClient.prefetchQuery([`get_product`, handle], () =>
//     fetchProduct(handle)
//   )
//
//   const queryData = await queryClient.getQueryData([`get_product`, handle])
//
//   if (!queryData) {
//     return {
//       props: {
//         notFound: true,
//       },
//     }
//   }
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       notFound: false,
//     },
//   }
// }
