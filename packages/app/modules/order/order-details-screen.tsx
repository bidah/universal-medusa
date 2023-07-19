import { View, ScrollView, Stack } from 'app/design'

export function OrderDetailsScreen() {


    const router = useRouter()

    const id = typeof router.query?.id === "string" ? router.query.id : ""

    const { isSuccess, data, isLoading, isError } = useQuery(
        ["get_order_details", id],
        () => fetchOrder(id),
        {
            enabled: id.length > 0,
            staleTime: 60 * 60 * 1000, // 1 hour
        }
    )

    if (isLoading) {
        // return <SkeletonOrderConfirmed />
        return null
    }

    if (isError) {
        if (IS_BROWSER) {
            router.replace("/404")
        }

        return null
        // return <SkeletonOrderConfirmed />
    }

    if (isSuccess) {
        return (
            <ScrollView className={'bg-white'}>
                <OrderDetailsTemplate order={data} />
            </ScrollView>
        )
    }

    return <></>
}
