import { usePathname } from 'expo-router'

export function useUniversalPathname() {
  const pathname = usePathname()

  return pathname
}
