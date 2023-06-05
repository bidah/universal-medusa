// import Footer from 'app/modules/layout/templates/footer'
// import Nav from 'app/modules/layout/templates/nav'
import React from 'react'
import { Text, View } from 'app/design'

const Layout: React.FC = ({ children }) => {
  return (
    <View>
      <Text className={'h-48 w-full bg-amber-400'}>header</Text>
      {/*<Nav />*/}
      {/*<View className="relative">{children}</View>*/}
      {/*<Footer />*/}
    </View>
  )
}

export default Layout
