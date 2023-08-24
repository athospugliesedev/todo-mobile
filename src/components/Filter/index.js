import { View, Text } from 'react-native'
import React from 'react'
import { FilterStyle } from './styles'

export function Filter({value, onChange, ...rest}) {
  return (
   <FilterStyle value={value} onChangeText={onChange} placeholderTextColor='#FFF' placeholder='Insira a próxima tarefa' />
  )
}