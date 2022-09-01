import React from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../constants/Layout";
import useFetch from "../hooks/useFetch";
import { productsStyle } from "../styles/global";
import { CatEnum, ResponseApiFetch, RootStackScreenProps } from "../types/types";
import ProductList from "./Shop/ProductList";

const url = "https://fakestoreapi.com/products/category/";

export default function Products({ route }: RootStackScreenProps<"Products">) {
	const { data, error, isLoading, refreshData }: ResponseApiFetch = useFetch(url + route.params.category, "GET");

	const displayImg = (cat: string) => {
		switch (cat) {
			case CatEnum.ELEC:
				return require("../assets/pictures/elec.jpg");
			case CatEnum.JEWEL:
				return require("../assets/pictures/jewels.jpg");
			case CatEnum.MEN:
				return require("../assets/pictures/men.jpg");
			case CatEnum.WOMEN:
				return require("../assets/pictures/women.jpg");
			default:
				break;
		}
	};

	return (
			<ImageBackground source={displayImg(route.params.category)} resizeMode="cover" style={productsStyle.imageBackground}>
				<ProductList data={data} isLoading={isLoading} refresh={refreshData} />
			</ImageBackground>
	);
}
