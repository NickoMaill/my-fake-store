import React from 'react'
import { Text, TextProps } from 'react-native'
import Colors from '../../constants/Color'

export function Regular(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'lato-regular' }]} />
  )
}
export function Bold(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'lato-bold' }]} />
  )
}
export function Thin(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'lato-thin' }]} />
  )
}
export function CatTitle(props: TextProps) {
  return (
    <Text {...props} style={[{ color: Colors.light.background, fontSize: 40, fontWeight: "800", position: "absolute", zIndex: 2, left: 50, bottom: 0 }, { fontFamily: 'lato-bold' }]} />
  )
}
