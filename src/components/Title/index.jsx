import { View, Text } from 'react-native'
import React from 'react'
import { Container, TitleStyled }  from './styles'

export function Title({title, ...rest}) {
  return (
    <TitleStyled>{title}</TitleStyled>
  )
}