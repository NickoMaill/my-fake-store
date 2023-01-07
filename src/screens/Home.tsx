import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import HomeCategory from './Home/HomeCategory';

export default function Home() {
    return (
        <View>
            <HomeCategory />
        </View>
    );
}
