import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import BottomTabNavigator from "./BottomTabNavigator";
import Error from "../screens/Error";
import Info from "../screens/Info";
import NotFound from "../screens/NotFound";
import Products from "../screens/Products";
import { Bold } from "../components/common/Texted";

export default function RootNavigator() {
	const Stack = createNativeStackNavigator<RootStackParamList>();
    
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={({ title: "My FakeStore" })}/>
			<Stack.Screen name="Info" component={Info} />
			<Stack.Screen name="Products" component={Products} options={({ route }) => ({ title: route.params.category.toUpperCase() })}/>
			<Stack.Screen name="Error" component={Error} />
			<Stack.Screen name="NotFound" component={NotFound} />
		</Stack.Navigator>
	);
}
