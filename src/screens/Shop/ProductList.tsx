import React from "react";
import { FlatList, ListRenderItemInfo, RefreshControl, SectionListRenderItemInfo, View } from "react-native";
import { ResponseApiProduct } from "../../types/types";
import ProductCard from "./ProductCard";

export default function ProductList(props: { data: ResponseApiProduct[]; isLoading: boolean, refresh: () => void }) {
	return (
		<View>
			{!props.isLoading && (
				<FlatList
                refreshControl={<RefreshControl refreshing={props.isLoading} onRefresh={props.refresh} />}
					data={props.data}
					renderItem={(product: ListRenderItemInfo<ResponseApiProduct>) => <ProductCard data={product.item} />}
					keyExtractor={(_data, i) => i.toString()}
				/>
			)}
		</View>
	);
}
