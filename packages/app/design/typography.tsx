import { ComponentProps, forwardRef } from 'react'
import {
  Text as NativeText,
  TextStyle,
  TextInput as NativeTextInput,
} from 'react-native'
import { styled } from 'nativewind'
import { TextLink as SolitoTextLink, Link as SolitoLink } from 'solito/link'

export const Text = styled(NativeText)

export const TextInput = styled(NativeTextInput)

export const Link = styled(SolitoLink)
/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled<
  ComponentProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  )
}, 'text-base font-bold hover:underline text-blue-500')
