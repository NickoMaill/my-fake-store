import { BTMultiSelect } from '@blump-tech/native-base-select';
import React, { useState } from 'react'
import { TextInput, TextProps, View } from 'react-native'
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { width } from '../../constants/Layout';
import { productsStyle } from '../../styles/global';
import { ResponseApiProduct } from '../../types/types';

export default function SettingsBar(props: { order: "lowRate" | "highRate", label: string, data?: ResponseApiProduct[], onPress?: () => void }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("");
    const item: ItemType<string>[] = [{ value: "Hello", label: "hello" }]
  return (
    <View style={productsStyle.filtersContainer}>
        {/* <TextInput style={{ borderWidth: 1, borderColor: "grey", backgroundColor: "#fff", padding: 8, borderRadius: 5, width: width / 2 }} placeholder="votre recherche" /> */}
        {/* <DropDownPicker open={isOpen} value={value} onPress={props.onPress} setOpen={setIsOpen} setValue={setValue} items={item} containerStyle={{ width: width / 3 }} placeholder={props.label}/> */}
        {/* <BTMultiSelect/> */}
    </View>
  )
}
