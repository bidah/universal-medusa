import React from 'react'
import { Svg, Path, Circle } from 'app/design'
import { IconProps } from 'app/types/icon'

const X: React.FC<IconProps> = ({
  size = '20',
  color = 'black',
  ...attributes
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <Path
        d="M15 5L5 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 5L15 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default X
