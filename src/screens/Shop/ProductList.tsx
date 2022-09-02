import React from "react";
import { FlatList, ListRenderItemInfo, RefreshControl, SectionListRenderItemInfo, View } from "react-native";
import { resources } from "../../i18n/fr";
import { ResponseApiProduct } from "../../types/types";
import ProductCard from "./ProductCard";
import SettingsBar from "./SettingsBar";

export default function ProductList(props: { data: ResponseApiProduct[]; isLoading: boolean; refresh: () => void }) {
	return (
		<>
			{!props.isLoading && (
				<FlatList
					refreshControl={<RefreshControl refreshing={props.isLoading} onRefresh={props.refresh} />}
					ListHeaderComponent={<SettingsBar order="highRate" label={resources.products.filterLabel} data={props.data}/>}
					data={props.data}
					renderItem={(product: ListRenderItemInfo<ResponseApiProduct>) => ( <ProductCard data={product.item} /> )}
					keyExtractor={(_data, i) => i.toString()}
				/>
			)}
		</>
	);
}
