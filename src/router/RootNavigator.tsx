import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import BottomTabNavigator from "./BottomTabNavigator";
import Error from "../screens/Error";
import Info from "../screens/Info";
import NotFound from "../screens/NotFound";
import Products from "../screens/Products";

export default function RootNavigator() {
	const Stack = createNativeStackNavigator<RootStackParamList>();
    
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen name="Info" component={Info} />
			<Stack.Screen name="Products" component={Products} />
			<Stack.Screen name="Error" component={Error} />
			<Stack.Screen name="NotFound" component={NotFound} />
		</Stack.Navigator>
	);
}
