import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useColorScheme from "../hooks/useColorScheme";
import Color from "../constants/Color";
import Basket from "../screens/Basket";
import Home from "../screens/Home";
import Setup from "../screens/Setup";
import { RootTabParamList, RootTabScreenProps } from "../types/types";
import TabBarIcon from "./TabBarIcon";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomTabNavigator() {
	const BottomTab = createBottomTabNavigator<RootTabParamList>();
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: Color[colorScheme].tint,
				headerStyle: { backgroundColor: "transparent" },
			}}
		>
			<BottomTab.Screen
				name="Basket"
				component={Basket}
				options={{ title: "Panier", tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} /> }}
			/>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={({ navigation }: RootTabScreenProps<"Home">) => ({
					title: "Shop",
					tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
				})}
			/>
			<BottomTab.Screen
				name="Setup"
				component={Setup}
				options={({ navigation }: RootTabScreenProps<"Setup">) => ({
					title: "Réglages",
					tabBarIcon: ({ color }) => <TabBarIcon name="gears" color={color} />,
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Home")}>
							<FontAwesome
								name="arrow-left"
								size={25}
								color={Color[colorScheme].text}
								style={{ marginLeft: 15 }}
							/>
						</TouchableOpacity>
					),
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate("Info")}>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Color[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</TouchableOpacity>
					),
					
				})
			}
			/>
		</BottomTab.Navigator>
	);
}
