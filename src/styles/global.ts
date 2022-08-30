import { StyleSheet } from "react-native";
import Color from "../constants/Color";
import { height, width } from "../constants/Layout";

export const errorStyle = StyleSheet.create({
	errorContainer: { 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column", 
        height: height / 2 
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
