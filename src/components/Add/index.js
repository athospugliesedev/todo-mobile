import { View, Text } from 'react-native'
import React from 'react'
import { AddStyle, AddText } from './styles'

export function Add({onPress, ...rest}) {
  return (
   <AddStyle onPress={onPress}>
    <AddText> + </AddText>
   </AddStyle>
  )
}