import { useFocusEffect } from '@react-navigation/native';
import { ReactElement, useRef } from 'react'
import { Animated, Dimensions } from 'react-native'

export default function SlideScreen(props: { children }) {
    const { width, height } = Dimensions.get("window")
    const slideAnime = useRef(new Animated.Value(0)).current;

    useFocusEffect(() => {
        Animated.timing(slideAnime, {
            toValue: width / 2.2,
            duration: 500,
            useNativeDriver: true,
        }).start();
        return () => {
            Animated.timing(slideAnime, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            })
        }
    })
  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: slideAnime }]}}>
        {props.children}
    </Animated.View>
  )
}
