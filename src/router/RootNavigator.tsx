import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import BottomTabNavigator from './BottomTabNavigator';
import Error from '../screens/Error';
import Info from '../screens/Info';
import NotFound from '../screens/NotFound';
import Products from '../screens/Products';
import { resources } from '../i18n/fr';
import ModalProduct from '../screens/Shop/ModalProduct';
// import ModalProduct from "../screens/Shop/modalProduct";

export default function RootNavigator() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: 'My FakeStore' }} />
            <Stack.Screen name="Info" component={Info} options={{ headerBackTitle: resources.common.back }} />
            <Stack.Screen name="Products" component={Products} options={({ route }) => ({ title: route.params.category.toUpperCase(), headerBackTitle: resources.common.back })} />
            <Stack.Group screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom' }}>
                <Stack.Screen name="Product" component={ModalProduct} options={({ route }) => ({ title: route.params.nameItem.toUpperCase(), headerBackTitle: resources.common.back })} />
            </Stack.Group>
            <Stack.Screen name="Error" component={Error} options={{ headerBackButtonMenuEnabled: false }} />
            <Stack.Screen name="NotFound" component={NotFound} options={{ headerBackTitle: resources.common.back }} />
        </Stack.Navigator>
    );
}
