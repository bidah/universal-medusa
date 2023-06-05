import React from 'react'
import { Svg, Path, Circle } from 'app/design'
import { IconProps } from 'app/types/icon'

const Spinner: React.FC<IconProps> = ({
  size = '16',
  color = 'black',
  ...attributes
}) => {
  return (
    <Svg
      className="animate-spin"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...attributes}
    >
      <Circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="4"
      ></Circle>
      <Path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></Path>
    </Svg>
  )
}

export default Spinner
