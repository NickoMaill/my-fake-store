import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Image, View } from 'react-native';
import { Bold, Regular } from '../common/Texted';

export default function ItemCard(props: { img: ImageSourcePropType }) {
    return (
        <View>
            <Image source={props.img}></Image>
        </View>
    );
}
