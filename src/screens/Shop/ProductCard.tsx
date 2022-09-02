import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import StarRating from "../../components/common/StarRating";
import { Bold, Regular } from "../../components/common/Texted";
import Color from "../../constants/Color";
import { resources } from "../../i18n/fr";
import { productsStyle } from "../../styles/global";
import { ResponseApiProduct } from "../../types/types";

export default function ProductCard(props: { data: ResponseApiProduct }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={productsStyle.cardContainer} onPress={() => navigation.navigate("Product", { productId: props.data.id, nameItem: props.data.title })}>
			<Bold style={{ marginBottom: 15 }}>{props.data.title}</Bold>
			<View style={productsStyle.cardContent}>,0
        <View style={productsStyle.priceContainer}>
				  <Bold style={{ marginVertical: 10 }}>{props.data.price} {resources.common.units}</Bold>
				  <StarRating rate={props.data.rating.rate} color={Color.light.tint} size={20} />
        </View>
				<Image source={{ uri: props.data.image }} style={productsStyle.imageItem} />
			</View>
		</TouchableOpacity>
	);
}
