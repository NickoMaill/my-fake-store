import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ErrorInfo } from "react";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Products: { category: string; sort?: string };
	Info: undefined;
	NotFound: undefined;
	Error: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;

export type RootTabParamList = {
	Home: undefined;
	Basket: undefined;
	Setup: undefined;
	Products: { category: string; sort?: string };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, Screen>,
	NativeStackScreenProps<RootStackParamList>
>;

export enum CatEnum {
	JEWEL = "jewelery",
	ELEC = "electronics",
	MEN = "men's clothing",
	WOMEN = "women's clothing",
}

export type ResponseApiFetch = {
	data: ResponseApiProduct[];
	error: ErrorInfo;
	isLoading: boolean;
	refreshData: () => void;
};

export type ResponseApiProduct = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};
