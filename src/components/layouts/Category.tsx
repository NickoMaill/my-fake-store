import React from "react";
import { FunctionComponent } from "react";
import { Image, ImageSourcePropType, Platform, Text, TouchableOpacity, View } from "react-native";
import { resources } from "../../i18n/fr";
import { CatEnum } from "../../types/types";
import { CatTitle } from "../common/Texted";

export default function Category(props: { cat: string; onPress?: () => void }) {

	const displayImg = (cat: string): ImageSourcePropType => {
		switch (cat) {
			case CatEnum.ELEC:
				return require("../../assets/pictures/elec.jpg");
			case CatEnum.JEWEL:
				return require("../../assets/pictures/jewels.jpg");
			case CatEnum.MEN:
				return require("../../assets/pictures/men.jpg");
			case CatEnum.WOMEN:
				return require("../../assets/pictures/women.jpg");
			default:
				break;
		}
	};

	return (
		<View>
			<TouchableOpacity style= {{ flex: 1, alignItems: "center", marginVertical: 40 }} onPress={props.onPress}>
				<Image style={{ width: 350, height: 250, borderRadius: 20, zIndex: 1, flex: 1 }} source={displayImg(props.cat)}></Image>
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", width: 350, height: 250, position: "absolute", zIndex:2, borderRadius: 20, }}></View>
                    {CatEnum.ELEC === props.cat && <CatTitle>{resources.category.electronics}</CatTitle>}
                    {CatEnum.JEWEL === props.cat && <CatTitle>{resources.category.jewelry}</CatTitle>}
                    {CatEnum.MEN === props.cat && <CatTitle>{resources.category.menClothing}</CatTitle>}
                    {CatEnum.WOMEN === props.cat && <CatTitle>{resources.category.womenClothing}</CatTitle>}
			</TouchableOpacity>
		</View>
	);
}
