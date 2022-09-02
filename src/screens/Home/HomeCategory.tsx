import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, RefreshControl, Text, View } from "react-native";
import ErrorDetails from "../../components/common/ErrorDetails";
import Category from "../../components/layouts/Category";
import useFetch from "../../hooks/useFetch";
import { resources } from "../../i18n/fr";
import SettingsBar from "../Shop/SettingsBar";

const url = "https://fakestoreapi.com/products/categories";

export default function HomeCategory() {
	const { data, error, isLoading, refreshData } = useFetch(url, "GET");
	const navigate = useNavigation()
	
	const refresh = useCallback(() => {
        refreshData()
	}, []);

	return (
		<View>
			{!isLoading && (
				<FlatList
					refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh} />}
					data={data}
					renderItem={(cat: ListRenderItemInfo<any>) => <Category cat={cat.item} onPress={() => navigate.navigate('Products', { category: cat.item })} />}
					keyExtractor={(_data, i) => i.toString()}
				/>
			)}
            {error !== null && (
                <ErrorDetails onPress={refresh}/>
            )}
		</View>
	);
}
