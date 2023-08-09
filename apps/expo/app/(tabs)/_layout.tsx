import { Tabs, useNavigation, usePathname } from 'expo-router'
import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid'
import {
  ShoppingBagIcon as ShoppingBagIconOutline,
  HomeIcon as HomeIconOutline,
  ShoppingCartIcon as ShoppingCartIconOutline,
  BuildingStorefrontIcon as BuildingStorefrontIconOutline,
  UserCircleIcon as UserCircleIconOutline,
} from 'react-native-heroicons/outline'
import { View, Text } from 'app/design'
import { useCart } from 'medusa-react'
import { LogBox } from 'react-native'

if (__DEV__) {
  LogBox.ignoreLogs([
    'Constants.platform.ios',
    'is in a background',
    'to suppress',
    'Request failed with status code 401',
    "The 'navigation' object",
    'No native splash',
    'Unable to find',
    'Unsupported dashed',
    '[Reanimated]',
    'cannot be given ref',
    'Each child in a list',
  ])
} else {
  LogBox.ignoreAllLogs()
}

const ShoppingBagIconWithItems = ({ focused, color }) => {
  const { totalItems } = useCart()

  return (
    <View className={'relative'}>
      <View
        style={{
          position: 'absolute',
          right: -5,
          zIndex: 1,
          width: 14,
          height: 14,
          backgroundColor: 'red',
          display: Boolean(totalItems) ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
      >
        <Text
          className="text-white"
          style={{ fontSize: 10, fontWeight: 'bold' }}
        >
          {totalItems}
        </Text>
      </View>
      {focused ? (
        <ShoppingBagIcon color={color} size={27} />
      ) : (
        <ShoppingBagIconOutline color={color} size={27} />
      )}
    </View>
  )
}
const TabBar = () => {
  const pathname = usePathname()

  return (
    <Tabs
      screenOptions={{
        headerTintColor: 'black',
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            ['products', 'store'].some((option) => pathname.includes(option)) ||
            pathname === '/' ? (
              <HomeIcon color={color} size={27} />
            ) : (
              <HomeIconOutline color={color} size={27} />
            ),
        }}
      />
      <Tabs.Screen
        name="my-bag"
        options={{
          headerShown: true,
          tabBarLabel: 'My Bag',
          tabBarIcon: (props) => <ShoppingBagIconWithItems {...props} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <UserCircleIcon color={color} size={27} />
            ) : (
              <UserCircleIconOutline color={color} size={27} />
            ),
        }}
      />
      <Tabs.Screen
        name={'cart'}
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}
export default function TabsLayout() {
  return <TabBar />
}
