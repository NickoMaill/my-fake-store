import { Image, StyleSheet, Text, View } from "react-native";
import LargeModal from "../../components/common/LargeModal";
import StarRating from "../../components/common/StarRating";
import { Bold } from "../../components/common/Texted";
import Color from "../../constants/Color";
import useFetch from "../../hooks/useFetch";
import { ResponseApiFetch, ResponseApiFetch2, ResponseApiProduct, RootStackScreenProps } from "../../types/types";

const url = "https://fakestoreapi.com/products/";

export default function ModalProduct({ route }: RootStackScreenProps<"Product">) {
	const { data, error, isLoading, refreshData }: ResponseApiFetch2 = useFetch(url + route.params.productId, "GET");

	return (
		<View>
			{!isLoading && data !== null && (
				<>
					<Bold>{data.category}</Bold>
					<Bold>{data.description}</Bold>
					<Bold>{data.price}</Bold>
                    <StarRating rate={data.rating.rate} size={30} color={Color.light.tint}/>
					<Bold>{data.title}</Bold>
                    <Image source={{ uri: data.image }} style={{ width: 500, height: 370 }} />
				</>
			)}
		</View>
	);
}
