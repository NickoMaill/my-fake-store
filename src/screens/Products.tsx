import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../hooks/useFetch";
import { ResponseApiFetch, RootStackScreenProps } from "../types/types";
import ProductList from "./Shop/ProductList";

const url = "https://fakestoreapi.com/products/category/";

export default function Products({ route }: RootStackScreenProps<"Products">) {
	const { data, error, isLoading, refreshData }: ResponseApiFetch = useFetch(url + route.params.category, "GET");

	return (
		<SafeAreaView>
            <ProductList data={data} isLoading={isLoading} refresh={refreshData}/>
		</SafeAreaView>
	);
}
