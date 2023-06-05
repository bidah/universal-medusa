import { useRouter } from 'next/router'

export function useUniversalPathname() {
  const router = useRouter()
  const pathname = router.pathname

  return pathname
}
