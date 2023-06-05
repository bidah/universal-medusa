import { medusaClient } from '../config'
import { useQuery } from 'react-query'

export const fetchProduct = async (handle: string) => {
  return await medusaClient.products
    .list({ handle })
    .then(({ products }) => products[0])
}

const useProduct = (handle) => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, handle],
    () => fetchProduct(handle),
    {
      enabled: handle.length > 0,
      keepPreviousData: true,
    }
  )

  return { data, isError, isLoading, isSuccess }
}

export default useProduct
