import { ProductScreen } from 'app/modules/products/screen'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import useProduct from 'app/lib/hooks/use-product'

export default function Handle(props) {
  const { handle } = useLocalSearchParams()
  const { data } = useProduct(handle)

  return (
    <>
      <Stack.Screen
        options={{
          title: data?.title,
          headerTintColor: 'black',
          headerBackTitle: '',
          headerTitleStyle: {
            color: !data ? 'white' : 'black',
          },
        }}
      />
      <ProductScreen />
    </>
  )
}
