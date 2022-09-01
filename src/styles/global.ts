import { StyleSheet } from "react-native";
import Color from "../constants/Color";
import { height, width } from "../constants/Layout";

export const errorStyle = StyleSheet.create({
	errorContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		height: height / 2,
	},

	messageContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: width / 1.5,
	},

	message: {
		fontSize: 15,
		textAlign: "center",
		marginVertical: 20,
	},

	refreshButton: {
		borderRadius: 4,
		borderWidth: 1,
		padding: 7,
		borderColor: Color.light.tint,
		flexDirection: "row",
		justifyContent: "space-between",
		width: 90,
		alignItems: "center",
	},
});

export const productsStyle = StyleSheet.create({
	imageBackground: {
		maxHeight: height * 2,
		flex: 1,
	},

	cardContainer: {
		borderRadius: 5,
		margin: 20,
		padding: 10,
		backgroundColor: "#fff",
		elevation: 10,
	},

	cardContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	priceContainer: {
		flex: 1,
		marginTop: 10,
	},

	imageItem: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
});
