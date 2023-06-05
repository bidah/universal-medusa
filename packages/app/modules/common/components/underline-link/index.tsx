import ArrowRight from 'app/modules/common/icons/arrow-right'
import { Link, View, Text } from 'app/design'
import clsx from 'clsx'
import { textLargeRegular } from '../../../../design/tailwind/custom-css-classes'

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <Link href={href}>
      <View className="group flex-row items-center gap-x-4 border-b border-current py-2 transition-all duration-300 hover:pl-4 hover:pr-1">
        <Text className={`${textLargeRegular}`}>{children}</Text>
        <ArrowRight
          size={20}
          className="transition-all duration-300 group-hover:ml-2"
          color={'black'}
        />
      </View>
    </Link>
  )
}

export default UnderlineLink
