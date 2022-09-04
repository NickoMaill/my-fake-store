import React from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorDetails from "../components/common/ErrorDetails";
import { height } from "../constants/Layout";
import { displayImg } from "../helpers/displayImg";
import useFetch from "../hooks/useFetch";
import { resources } from "../i18n/fr";
import { productsStyle } from "../styles/global";
import { CatEnum, ResponseApiFetch, RootStackScreenProps } from "../types/types";
import ProductList from "./Shop/ProductList";
import SettingsBar from "./Shop/SettingsBar";

const url = "https://fakestoreapi.com/products/category/";

export default function Products({ route }: RootStackScreenProps<"Products">) {
	const { data, error, isLoading, refreshData }: ResponseApiFetch = useFetch(url + route.params.category, "GET");

	return (
			<ImageBackground source={displayImg(route.params.category)} resizeMode="cover" imageStyle={{ opacity: 0.6 }} style={productsStyle.imageBackground}>
				{error ? (
					<ErrorDetails onPress={refreshData}/>
				) : (
					<ProductList data={data} isLoading={isLoading} refresh={refreshData} />
				)}
			</ImageBackground>
	);
}
