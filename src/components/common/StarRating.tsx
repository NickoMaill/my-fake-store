import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

const filledStar: string = "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
const cornerStar: string = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

export default function StarRating(props: { rate: number; color?: string; size?: number }) {
	return (
		<View style={{ flex: 1, flexDirection: "row" }}>
			{1 - props.rate > 0 ? (
				<Image
					source={{ uri: cornerStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			) : (
				<Image
					source={{ uri: filledStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			)}
			{2 - props.rate > 0 ? (
				<Image
					source={{ uri: cornerStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			) : (
				<Image
					source={{ uri: filledStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			)}
			{3 - props.rate > 0 ? (
				<Image
					source={{ uri: cornerStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			) : (
				<Image
					source={{ uri: filledStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			)}
			{4 - props.rate > 0 ? (
				<Image
					source={{ uri: cornerStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			) : (
				<Image
					source={{ uri: filledStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			)}
			{5 - props.rate > 0 ? (
				<Image
					source={{ uri: cornerStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			) : (
				<Image
					source={{ uri: filledStar }}
					style={{ tintColor: props.color, width: props.size, height: props.size }}
				/>
			)}
		</View>
	);
}
