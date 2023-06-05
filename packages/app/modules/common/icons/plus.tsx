import React from 'react'
import { Svg, Path, Circle } from 'app/design'
import { IconProps } from 'app/types/icon'

const Plus: React.FC<IconProps> = ({
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
        d="M8 3.33331V12.6666"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33301 8H12.6663"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Plus
