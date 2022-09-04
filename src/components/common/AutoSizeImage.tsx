import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Image, ImageProps, ImageStyle, StyleProp, StyleSheetProperties, View } from 'react-native';
import { getHeight } from '../../helpers/getHeight';
import { autoSizeImage } from '../../styles/global';

export default function AutoSizeImage(props: { source: string, width?: number, style?: ImageStyle, square: boolean }) {
    const [ imageWidth, _setImageWidth ] = useState<number>(props.width || 300)
	const [ imageHeight, setImageHeight ] = useState<number>(null);    
    
	useEffect(() => {
        if (props.source) {
            getHeight(props.source, imageWidth, setImageHeight);
		}
	}, [props.source])

    if (props.square) {
        return (
        <View style={[autoSizeImage.squareView, { width: imageWidth + 30, height: imageHeight + 30 }]}>
            <Image source={{ uri: props.source }} style={[props.style, { width: imageWidth, height: imageHeight }]} />
        </View>
        )
        
    } else {
        return (
              <Image source={{ uri: props.source }} style={[props.style, { width: imageWidth, height: imageHeight }]} />
        )
    }

}
