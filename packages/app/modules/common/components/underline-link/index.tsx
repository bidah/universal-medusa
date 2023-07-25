import ArrowRight from 'app/modules/common/icons/arrow-right'
import { Link, View, Text } from 'app/design'
import clsx from 'clsx'
import { textLargeRegular } from '../../../../design/tailwind/custom-css-classes'

type UnderlineLinkProps = {
  href: string
  color?: string
  children?: React.ReactNode
}

const UnderlineLink = ({
  href,
  children,
  color = 'black',
}: UnderlineLinkProps) => {
  return (
    <Link href={href}>
      <View
        className={`group flex-row items-center gap-x-4 border-b border-current border-${color} py-2 transition-all duration-300 hover:pl-4 hover:pr-1`}
      >
        <Text className={`${textLargeRegular} text-${color}`}>{children}</Text>
        <ArrowRight
          size={20}
          className="transition-all duration-300 group-hover:ml-2"
          color={color}
        />
      </View>
    </Link>
  )
}

export default UnderlineLink
