import React from 'react'
import { Svg, Path, Circle } from 'app/design'
import { IconProps } from 'app/types/icon'

const ChevronDown: React.FC<IconProps> = ({
  size = '16',
  color = 'black',
  ...attributes
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <Path
        d="M4 6L8 10L12 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChevronDown
