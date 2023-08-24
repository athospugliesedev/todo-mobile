import { View, Text } from 'react-native'
import React from 'react'
import { DescriptionStyled }  from './styles'

export function Description({description, ...rest}) {
  return (
    <DescriptionStyled>{description}</DescriptionStyled>
  )
}