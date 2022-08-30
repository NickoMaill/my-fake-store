import React from 'react'
import { ListRenderItemInfo, View, Text } from 'react-native'
import { ResponseApiProduct } from '../../types/types'

export default function ProductCard(props: { data: ResponseApiProduct}) {    
  return (
    <View>
        <Text>{props.data.title}</Text>
    </View>
  )
}
