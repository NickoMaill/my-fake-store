import { useNavigation } from "@react-navigation/native";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import AutoSizeImage from "../../components/common/AutoSizeImage";
import StarRating from "../../components/common/StarRating";
import { Bold } from "../../components/common/Texted";
import Color from "../../constants/Color";
import { width } from "../../constants/Layout";
import useFetch from "../../hooks/useFetch";
import { resources } from "../../i18n/fr";
import { ResponseApiFetch2, RootStackScreenProps } from "../../types/types";

const url = "https://fakestoreapi.com/products/";

export default function ModalProduct({ route }: RootStackScreenProps<"Product">) {
	const { data, error, isLoading, refreshData }: ResponseApiFetch2 = useFetch(url + route.params.productId, "GET");

	return (
		<ScrollView>
			{!isLoading && data !== null && (
				<View style={{ marginTop: 30 }}>
					<TouchableOpacity style={{ alignItems: "center", marginBottom: 30 }}>
						<AutoSizeImage source={data.image} width={210} square={true} />
					</TouchableOpacity>
					<View style={{ backgroundColor: Color.light.tint, padding: 20, fontSize: 25, borderRadius: 10, width: width }}>
						<Bold>{data.price} {resources.common.units}</Bold>
					</View>
					<Bold>{data.description}</Bold>
					<StarRating rate={data.rating.rate} size={30} color={Color.light.tint} />
					<Bold>{data.title}</Bold>
				</View>
			)}
		</ScrollView>
	);
}
