import { useAccount } from 'app/lib/context/account-context'
import ChevronDown from 'app/modules/common/icons/chevron-down'
import clsx from 'clsx'
import { View, Text, Pressable, Link } from 'app/design'
import { useRouter } from 'solito/router'
import { useUniversalPathname } from 'app/lib/hooks/use-universal-pathname'
import {
  textBaseRegular,
  textBaseSemi,
} from 'app/design/tailwind/custom-css-classes'
const AccountNav = () => {
  const route = useUniversalPathname()
  const { handleLogout } = useAccount()

  return (
    <View>
      <View className="small:hidden ios:hidden">
        {route !== '/account' && (
          <Link href="/account">
            <View className="text-small-regular flex items-center gap-x-2 py-2">
              <ChevronDown className="rotate-90 transform" />
              <Text>Account</Text>
            </View>
          </Link>
        )}
      </View>
      <View>
        <View className="small:block hidden">
          <View className="py-4">
            <Text className={`${textBaseSemi} `}>Account</Text>
          </View>
          <View className={`${textBaseRegular} `}>
            <View className="mb-0 flex flex-col items-start justify-start gap-y-4">
              <View>
                <AccountNavLink href="/account" route={route}>
                  <Text>Overview</Text>
                </AccountNavLink>
              </View>
              <View>
                <AccountNavLink href="/account/profile" route={route}>
                  <Text>Profile</Text>
                </AccountNavLink>
              </View>
              <View>
                <AccountNavLink href="/account/addresses" route={route}>
                  <Text>Addresses</Text>
                </AccountNavLink>
              </View>
              <View>
                <AccountNavLink href="/account/orders" route={route}>
                  <Text>Orders</Text>
                </AccountNavLink>
              </View>
              <Pressable className="text-grey-700" onPress={handleLogout}>
                <Text>Log out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
}

const AccountNavLink = ({ href, route, children }: AccountNavLinkProps) => {
  const active = route === href
  return (
    <Link href={href}>
      <Text
        className={clsx('text-gray-700', {
          'font-semibold text-gray-900': active,
        })}
      >
        {children}
      </Text>
    </Link>
  )
}

export default AccountNav
