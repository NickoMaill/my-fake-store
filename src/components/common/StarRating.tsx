import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Color from '../../constants/Color';

export default function StarRating(props: { rate: number; color?: string; size?: number }) {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {1 - props.rate > 0 ? <FontAwesome size={props.size} name="star-o" color={Color.light.tint} /> : <FontAwesome size={props.size} name="star" color={Color.light.tint} />}
            {2 - props.rate > 0 ? <FontAwesome size={props.size} name="star-o" color={Color.light.tint} /> : <FontAwesome size={props.size} name="star" color={Color.light.tint} />}
            {3 - props.rate > 0 ? <FontAwesome size={props.size} name="star-o" color={Color.light.tint} /> : <FontAwesome size={props.size} name="star" color={Color.light.tint} />}
            {4 - props.rate > 0 ? <FontAwesome size={props.size} name="star-o" color={Color.light.tint} /> : <FontAwesome size={props.size} name="star" color={Color.light.tint} />}
            {5 - props.rate > 0 ? <FontAwesome size={props.size} name="star-o" color={Color.light.tint} /> : <FontAwesome size={props.size} name="star" color={Color.light.tint} />}
        </View>
    );
}
